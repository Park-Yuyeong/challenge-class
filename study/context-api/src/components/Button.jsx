import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

const Button = () => {
  const { logIn, logOut } = useContext(AuthContext);

  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
};

export default Button;
