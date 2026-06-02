import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Build mailto URL for the client to open
    const subject = encodeURIComponent("NEW WEB client")
    const body = encodeURIComponent(
      `New Contact Form Submission\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "Not provided"}\n\n` +
      `Message:\n${message}`
    )
    
    const mailtoUrl = `mailto:jw.evans@kw.com?subject=${subject}&body=${body}`

    return NextResponse.json({ success: true, mailtoUrl })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
