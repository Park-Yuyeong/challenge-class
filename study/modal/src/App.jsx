import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "제목", content: "내용" });
  };

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
    </main>
  );
}

export default App;
