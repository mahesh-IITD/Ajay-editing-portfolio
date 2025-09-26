import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const apiKey = process.env.EMAIL_API_KEY
    const to = process.env.CONTACT_EMAIL
    if (!apiKey || !to) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    // Example: integrate with your email provider here (e.g., Resend, Sendgrid, SMTP)
    // await sendEmail({ apiKey, to, subject: `New inquiry from ${name}`, text: `${message}\nFrom: ${email}` })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}


