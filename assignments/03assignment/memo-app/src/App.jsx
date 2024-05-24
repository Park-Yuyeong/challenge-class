import styled from "styled-components";
import Aside from "./components/Aside/Aside";
import MemoSection from "./components/MemoSection";

function App() {
  return (
    <>
      <StWrapper>
        <StMainBox>
          <Aside />
          <MemoSection />
        </StMainBox>
      </StWrapper>
    </>
  );
}

const StWrapper = styled.div`
  display: flex;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  line-height: 1.15;
`;

const StMainBox = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  margin: 0px auto;
  width: 100%;
  max-width: 1024px;
  height: 500px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgb(230, 230, 230) 0px 20px 30px;
`;

export default App;
