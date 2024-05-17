import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // 피카츄 위치
  const [isGoRight, setIsGoRight] = useState(1); // 피카츄가 바라보는 방향

  // 피카츄 움직이기
  const movePikachu = (e) => {
    const { y, x } = position;

    switch (e.key) {
      case "ArrowUp": // 위로
        setPosition({ y, x: x - 80 >= 0 ? x - 80 : x });
        break;
      case "ArrowDown": // 아래로
        setPosition({ y, x: x + 80 < 800 ? x + 80 : x });
        break;
      case "ArrowLeft": // 왼쪽으로
        setPosition({ y: y - 80 >= 0 ? y - 80 : y, x });
        setIsGoRight(-1);
        break;
      case "ArrowRight": // 오른쪽으로
        setPosition({ y: y + 80 < 800 ? y + 80 : y, x });
        setIsGoRight(1);
        break;
      case " ": // 점프
        setPosition({ y, x: x - 20 });
        setTimeout(() => {
          setPosition({ y, x });
        }, 100);
    }
  };

  return (
    <main>
      <div id="grass" tabIndex={0} onKeyDown={movePikachu}>
        <Pikachu position={position} isGoRight={isGoRight} />
      </div>
    </main>
  );
}

export default App;
