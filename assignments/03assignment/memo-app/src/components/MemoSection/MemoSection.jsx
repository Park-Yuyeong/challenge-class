import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../../redux/slices/memo.slice";

const MemoSection = () => {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memoSlice.memos);
  const currentMemo = useSelector((state) =>
    state.memoSlice.memos.find((memo) => memo.isSelected)
  );

  const changeMemoHandler = (e) => {
    const changedMemos = memos.map((memo) =>
      memo.isSelected === true ? { ...memo, content: e.target.value } : memo
    );

    dispatch(updateMemo(changedMemos));
  };

  const formatDateString = (time) =>
    `${time.getFullYear()}년 ${time.getMonth()}월 ${time.getDate()}, ${time
      .toLocaleTimeString("ko-KR")
      .slice(0, 7)}`;

  return (
    <StArticle>
      <StDate>{formatDateString(new Date(currentMemo.time))}</StDate>
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
