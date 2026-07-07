import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: result.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'Resend API key not configured. Set RESEND_API_KEY.' },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)
    const { name, email, message } = result.data

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'brikpaul569-cmd@example.com',
      subject: `New contact from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 },
    )
  }
}
