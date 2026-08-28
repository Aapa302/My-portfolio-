import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, or message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in process.env.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is currently unavailable. Please contact directly at popathanu1996@gmail.com.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "popathanu1996@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4f46e5;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f3f4f6; padding: 15px; border-left: 4px solid #4f46e5; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { success: false, error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
