import React from "react";
// import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

const Button = () => {
  const logIn = useLoginStore((state) => state.logIn);
  const logOut = useLoginStore((state) => state.logOut);

  // const { logIn, logOut } = useLoginStore(
  //   useShallow((state) => ({
  //     login: state.logIn,
  //     logOut: state.logOut,
  //   }))
  // );

  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
};

export default Button;
