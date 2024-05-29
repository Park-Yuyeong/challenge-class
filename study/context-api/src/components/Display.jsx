import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

const Display = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <div>{`로그인 여부 : ${isLoggedIn}`}</div>;
};

export default Display;
