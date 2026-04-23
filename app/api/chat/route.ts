import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const trimmedMessage =
      typeof message === "string" ? message.trim() : "";

    if (!trimmedMessage) {
      return NextResponse.json(
        { reply: "Please send a message so I can help." },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are Yenula Nimneth's portfolio assistant.

Answer questions based on:
- Yenula is an IT undergraduate at SLIIT
- Skills: React, Java, Python, MySQL, Next.js
- Projects: Blood Bank System, Music Store, Greenhouse Automation
- Location: Sri Lanka

Be short, clear, and professional.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: trimmedMessage },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          reply:
            "The assistant is unavailable right now. Please try again shortly.",
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ??
      "I couldn't generate a reply right now. Please try again.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      {
        reply:
          "Something went wrong while processing your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
