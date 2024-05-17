import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // 피카츄 위치
  const [direction, setDirection] = useState(1); // 피카츄가 바라보는 방향 (1: 오른쪽 / -1: 왼쪽)
  const [isJumping, setIsJumping] = useState(false); // 피카츄는 점핑중인가?

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
        setDirection(-1);
        break;
      case "ArrowRight": // 오른쪽으로
        setPosition({ y: y + 80 < 800 ? y + 80 : y, x });
        setDirection(1);
        break;
      case " ": // 점프
        if (isJumping === false) {
          setPosition({ y, x: x - 30 });
          setIsJumping(true);
          setTimeout(() => {
            setPosition({ y, x });
            setIsJumping(false);
          }, 100);
        }
        break;
    }
  };

  return (
    <main>
      <div id="grass" tabIndex={0} onKeyDown={movePikachu}>
        <Pikachu position={position} direction={direction} />
      </div>
    </main>
  );
}

export default App;
