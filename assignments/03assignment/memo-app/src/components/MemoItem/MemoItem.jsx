import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectMemo } from "../../redux/slices/memo.slice";

const MemoItem = ({ id, content, time, isSelected }) => {
  const dispatch = useDispatch();

  const clickMemoHandler = (id) => {
    dispatch(selectMemo(id));
  };
  return (
    <StItemBox $isSelected={isSelected} onClick={() => clickMemoHandler(id)}>
      <StContentPrev>{content || "새로운 메모"}</StContentPrev>
      <StTime>{time.toLocaleTimeString("ko-KR")}</StTime>
    </StItemBox>
  );
};

const StItemBox = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isSelected ? "rgb(255, 224, 127)" : "white"};
  width: 100%;
  max-width: 220px;
  padding: 12px 24px;
  margin: auto;
  cursor: pointer;
  box-sizing: border-box;
`;

const StContentPrev = styled.h6`
  margin: 0px 0px 2px;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;

const StTime = styled.time`
  font-size: 12px;
  color: rgb(64, 64, 64);
  box-sizing: border-box;
`;

export default MemoItem;
