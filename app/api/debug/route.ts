import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()

    // Test if we can connect to Supabase
    const { data, error } = await supabase.auth.getUser()

    return NextResponse.json({
      status: 'ok',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
      serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing',
      userError: error?.message || 'No error',
      hasUser: !!data.user,
    })
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
}
