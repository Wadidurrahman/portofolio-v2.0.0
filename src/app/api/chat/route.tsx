import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";



export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      model: openai("gpt-4o-mini"),
      messages,
      system: `Kamu adalah asisten AI pribadi Wadidur Rahman.
                Jawab singkat, profesional, dan relevan dengan portofolio.`,
    });

    return Response.json({
      message: result.text,
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    return Response.json(
      { message: "AI gagal merespons." },
      { status: 500 }
    );
  }
}
