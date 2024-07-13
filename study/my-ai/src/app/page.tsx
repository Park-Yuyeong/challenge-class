"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleClickTalk = async () => {
    const response = await fetch("http://localhost:3000/api/talk", {
      method: "POST",
      body: `"${content}"`,
    });
    const data = await response.json();

    setResponse(data);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold">내 AI 남자친구와 대화하기</h1>

      <textarea
        className="border border-black w-full max-w-sm mt-10 p-1.5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleClickTalk}
        className="border px-4 py-2 border-black rounded text-sm mt-3 bg-white hover:brightness-90 active:brightness-75"
      >
        위 내용으로 말 걸기
      </button>

      <p className="mt-10">{response}</p>
    </main>
  );
}
