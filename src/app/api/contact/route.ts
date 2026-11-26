import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, jobTitle, sector, service, message, referralSource } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and project message are required fields.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const inquiryPayload = {
      id: `inq_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name,
      email,
      organization: organization || 'Not specified',
      jobTitle: jobTitle || 'Not specified',
      sector: sector || 'Not specified',
      service: service || 'Not specified',
      message,
      referralSource: referralSource || 'Not specified',
      source: 'DataSphere Web Portal',
      division: 'DataSphere Consulting Ltd'
    }

    console.log('[API: /api/contact] New Project Inquiry Received:', inquiryPayload)

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry was submitted successfully.',
        inquiryId: inquiryPayload.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API: /api/contact] Server Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error processing contact inquiry.' },
      { status: 500 }
    )
  }
}
