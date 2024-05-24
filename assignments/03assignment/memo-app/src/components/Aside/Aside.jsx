import React from "react";
import styled from "styled-components";
import MemoHeader from "../MemoHeader/MemoHeader";
import MemoList from "../MemoList";

const Aside = () => {
  return (
    <StAside>
      <MemoHeader />
      <MemoList />
    </StAside>
  );
};

const StAside = styled.aside`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

export default Aside;
