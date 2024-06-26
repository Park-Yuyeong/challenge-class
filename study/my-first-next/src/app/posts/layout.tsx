"use client";

import { PropsWithChildren, useEffect } from "react";

const PostLayout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    alert("Hello wolrd");
  }, []);

  return (
    <>
      <h1>포스트 레이아웃</h1>
      {children}
    </>
  );
};

export default PostLayout;
