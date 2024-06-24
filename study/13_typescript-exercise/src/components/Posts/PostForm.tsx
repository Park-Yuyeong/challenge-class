import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

const PostForm = () => {
  const titleElRef = useRef<HTMLInputElement>(null);
  const bodyElRef = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClickButton = async () => {
    const title = titleElRef.current?.value;
    const body = bodyElRef.current?.value;

    if (!title || !body) return alert("데이터를 잘 준비해 주세요");

    const data = { title, body };

    await createPost(data);
  };

  return (
    <div className="flex flex-col p-4">
      <input
        className="border border-black"
        placeholder="제목"
        ref={titleElRef}
      />
      <textarea
        className="border border-black"
        placeholder="내용"
        ref={bodyElRef}
      />
      <button className="border border-black" onClick={handleClickButton}>
        포스트 생성하기
      </button>
    </div>
  );
};

export default PostForm;
