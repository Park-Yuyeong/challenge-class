import { useState } from "react";
import { useToast } from "../context/toast.context";

const InputForm = () => {
  const toast = useToast();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState(500);

  return (
    <div className="flex flex-col gap-6 bg-white items-center">
      <h2 className="font-bold text-center text-2xl">토스트 컨트롤러</h2>
      <div className="flex flex-col gap-1.5 items-start">
        <label htmlFor="title">제목 (필수)</label>
        <input
          className="border rounded-md w-80 px-4 py-2.5"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="content">내용 (필수)</label>
        <input
          className="border rounded-md w-80 px-4 py-2.5"
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="time">노출 시간(ms) (선택)</label>
        <input
          className="border rounded-md w-80 px-4 py-2.5"
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button
        className="bg-black text-white w-full text-[15px] rounded-md py-3 font-medium hover:bg-black/80 active:bg-black/70 transition-all"
        onClick={() => toast.open({ title, content, time })}
      >
        토스트 띄우기
      </button>
    </div>
  );
};

export default InputForm;
