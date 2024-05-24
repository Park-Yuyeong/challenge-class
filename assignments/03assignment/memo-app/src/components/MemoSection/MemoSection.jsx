import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../../redux/slices/memo.slice";

const MemoSection = () => {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memoSlice.memos);
  const currentMemo = useSelector((state) =>
    memos.find((memo) => memo.isSelected)
  );

  const changeMemoHandler = (e) => {
    const changedMemos = memos.map((memo) =>
      memo.isSelected === true ? { ...memo, content: e.target.value } : memo
    );

    dispatch(updateMemo(changedMemos));
  };

  return (
    <StArticle>
      <StDate>{currentMemo.time.toLocaleString().slice(0, 21)}</StDate>
      <StMemoBox onChange={changeMemoHandler} value={currentMemo.content}>
        {currentMemo.content}
      </StMemoBox>
    </StArticle>
  );
};

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const StDate = styled.span`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;

const StMemoBox = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

export default MemoSection;
