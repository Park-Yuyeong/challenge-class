import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { createMemo, deleteMemo } from "../../redux/slices/memo.slice";

const MemoHeader = () => {
  const dispatch = useDispatch();

  const createMemoHandler = () => {
    const newMemo = {
      id: uuid(),
      content: "",
      time: new Date(),
      isSelected: true,
    };
    dispatch(createMemo(newMemo));
  };

  const deleteMemoHandler = () => {
    dispatch(deleteMemo());
  };

  return (
    <StHeader>
      <StButton onClick={createMemoHandler}>새 메모 작성하기</StButton>
      <StButton onClick={deleteMemoHandler}>삭제</StButton>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  border-top-left-radius: 10px;
`;

const StButton = styled.button`
  all: unset;
  font-size: 13px;
  font-weight: 500;
  color: rgb(128, 128, 128);
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: black;
    font-weight: 600;
  }
`;

export default MemoHeader;
