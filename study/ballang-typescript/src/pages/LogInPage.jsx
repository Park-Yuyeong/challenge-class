import { useMutation } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const LogInPage = () => {
  const navigate = useNavigate();

  const { mutateAsync: logIn } = useMutation({
    mutationFn: (data) => api.auth.logIn(data),
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickLogIn = async () => {
    try {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const data = { email, password };

      await logIn(data);

      alert("로그인 완료");
      navigate("/");
    } catch {
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <input
        placeholder="이메일을 입력해주세요"
        type="email"
        ref={emailInputRef}
      />
      <input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        ref={passwordInputRef}
      />
      <button onClick={handleClickLogIn}>로그인하기</button>
    </div>
  );
};

export default LogInPage;
