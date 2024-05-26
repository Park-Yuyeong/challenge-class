import { useSelector } from "react-redux";
import styled from "styled-components";
import MemoItem from "../MemoItem";

const MemoList = () => {
  const memos = useSelector((state) => state.memoSlice.memos);

  return (
    <StListBox>
      {memos.map((memo) => {
        return (
          <MemoItem
            key={memo.id}
            id={memo.id}
            content={memo.content}
            time={new Date(memo.time)}
            isSelected={memo.isSelected}
          />
        );
      })}
    </StListBox>
  );
};

const StListBox = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;

export default MemoList;
