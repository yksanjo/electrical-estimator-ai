import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { uploadToS3 } from '@/lib/s3'
import { analyzeBlueprint } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check subscription status
    const { data: profile } = await supabase
      .from('profiles')
      .select('subscription_status')
      .eq('id', user.id)
      .single()

    if (profile?.subscription_status !== 'active') {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    const formData = await request.formData()
    const projectName = formData.get('project_name') as string
    const notes = formData.get('notes') as string | null
    const blueprintFile = formData.get('blueprint') as File

    if (!projectName || !blueprintFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate file size (25MB max)
    if (blueprintFile.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 25MB' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await blueprintFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to S3
    const blueprintUrl = await uploadToS3(
      buffer,
      blueprintFile.name,
      blueprintFile.type
    )

    // Create estimate record with processing status
    const { data: estimate, error: estimateError } = await supabase
      .from('estimates')
      .insert({
        user_id: user.id,
        project_name: projectName,
        blueprint_url: blueprintUrl,
        blueprint_filename: blueprintFile.name,
        notes,
        status: 'processing',
      })
      .select()
      .single()

    if (estimateError) {
      return NextResponse.json(
        { error: 'Failed to create estimate' },
        { status: 500 }
      )
    }

    // Process blueprint with AI asynchronously
    try {
      const analysis = await analyzeBlueprint(blueprintUrl)

      // Update estimate with results
      await supabase
        .from('estimates')
        .update({
          status: 'completed',
          outlets_count: analysis.outlets_count,
          switches_count: analysis.switches_count,
          lights_count: analysis.lights_count,
          panels_count: analysis.panels_count,
          receptacles_count: analysis.receptacles_count,
          materials: analysis.materials,
          ai_confidence_score: analysis.confidence_score,
        })
        .eq('id', estimate.id)

      // Log audit event
      await supabase.rpc('log_audit_event', {
        p_action: 'create_estimate',
        p_resource_type: 'estimate',
        p_resource_id: estimate.id,
        p_metadata: { project_name: projectName },
      })
    } catch (aiError) {
      // Update estimate with error status
      await supabase
        .from('estimates')
        .update({
          status: 'failed',
          processing_error: aiError instanceof Error ? aiError.message : 'AI processing failed',
        })
        .eq('id', estimate.id)
    }

    return NextResponse.json({ estimateId: estimate.id }, { status: 201 })
  } catch (error) {
    console.error('Error creating estimate:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
