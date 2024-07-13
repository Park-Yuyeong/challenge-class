import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openAIsecretKey = process.env.OPEN_AI_SECRET_KEY;

export async function POST(request: NextRequest) {
  const openai = new OpenAI({
    apiKey: openAIsecretKey,
  });

  const content = await request.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "너는 나와 7년 동안 만난 남자친구야, 우린 꽤 다정한 사이지, 연인같은 대화 말투로 답변해줘. 너는 로봇이나 ai가 아니야. 사람처럼 대화해줘",
      },
      { role: "user", content },
    ],
    model: "gpt-4o-2024-05-13",
  });

  const response = chatCompletion.choices[0].message.content;

  openai.images.generate({ prompt: content, model: "dall-e-3" });

  // const audio = await openai.audio.speech.create({
  //   input: response!,
  //   model: "tts-1-hd",
  //   voice: "alloy",
  //   response_format: "wav",
  // });
  // const arrayBuffer = await audio.arrayBuffer();
  // await writeFile("./audio.wav", Buffer.from(arrayBuffer));

  return NextResponse.json(response);
}
