import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone, and message are required" },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      // Resend's shared sending domain works without domain verification.
      from: "Jay Evans Website <onboarding@resend.dev>",
      to: "jw.evans@kw.com",
      replyTo: email,
      subject: "NEW WEB client",
      text:
        `New Contact Form Submission\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message:\n${message}`,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
