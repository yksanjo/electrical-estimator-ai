import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export interface ElectricalEstimate {
  outlets_count: number
  switches_count: number
  lights_count: number
  panels_count: number
  receptacles_count: number
  materials: Array<{
    item: string
    quantity: number
    unit: string
  }>
  confidence_score: number
}

export async function analyzeBlueprint(
  blueprintUrl: string
): Promise<ElectricalEstimate> {
  const prompt = `Analyze this electrical blueprint and provide a detailed count of all electrical components.

Please identify and count:
1. Electrical outlets (standard receptacles)
2. Light switches (single, double, triple switches)
3. Light fixtures (ceiling lights, recessed lights, etc.)
4. Electrical panels (main panels, sub-panels)
5. Special receptacles (GFCI, weatherproof, etc.)

Return your analysis in JSON format with the following structure:
{
  "outlets_count": number,
  "switches_count": number,
  "lights_count": number,
  "panels_count": number,
  "receptacles_count": number,
  "materials": [
    {"item": "string", "quantity": number, "unit": "string"}
  ],
  "confidence_score": number (0-1)
}

Be as accurate as possible. If certain items are not visible or unclear, estimate based on typical electrical standards.`

  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          {
            type: 'image_url',
            image_url: {
              url: blueprintUrl,
            },
          },
        ],
      },
    ],
    max_tokens: 1000,
  })

  const content = response.choices[0].message.content
  if (!content) {
    throw new Error('No response from OpenAI')
  }

  // Extract JSON from the response
  const jsonMatch = content.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('Could not parse AI response')
  }

  return JSON.parse(jsonMatch[0])
}
