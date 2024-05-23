import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const status = isLoggedIn ? "로그인" : "로그아웃";

  return <div>현재 로그인이 {status} 상태입니다</div>;
};

export default Display;
