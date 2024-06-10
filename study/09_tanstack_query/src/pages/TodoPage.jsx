import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const TodoPage = () => {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      return axios.post(ENDPOINT, { value: variables });
    },
  });

  const handleClickButton = async () => {
    mutate(inputRef.current.value, { onSuccess: () => alert("성공했습니다!") });
  };

  return (
    <Page>
      <input
        type="text"
        className="bolder"
        ref={inputRef}
        disabled={isPending}
      />
      <button
        className="bg-black text-white"
        onClick={handleClickButton}
        disabled={isPending}
      >
        눌러주세요
      </button>
    </Page>
  );
};

export default TodoPage;
