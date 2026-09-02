import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, need, budgetRange, timeline, projectScope } = body

    if (!name || !email || !projectScope) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and project scope are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid work email.' },
        { status: 400 }
      )
    }

    const proposalPayload = {
      id: `prop_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name,
      email,
      organization: organization || 'Enterprise / Private',
      need: need || 'Custom Software Development',
      budgetRange: budgetRange || 'Flexible',
      timeline: timeline || 'Standard',
      projectScope,
      division: 'BIGWI HOUSE (DataSphere Consulting Ltd.)'
    }

    console.log('[API: /api/proposal] New Proposal Request Received:', proposalPayload)

    return NextResponse.json(
      {
        success: true,
        message: 'Proposal request logged successfully. A solutions architect will reach out shortly.',
        proposalId: proposalPayload.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API: /api/proposal] Server Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error processing proposal request.' },
      { status: 500 }
    )
  }
}
