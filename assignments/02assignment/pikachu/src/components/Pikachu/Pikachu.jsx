import pikachuImage from "../../assets/pikachu.png";
import "./Pikachu.css";

const Pikachu = ({ position, isGoRight }) => {
  return (
    <div>
      <img
        id="image-pikachu"
        src={pikachuImage}
        style={{
          top: `${position.x}px`,
          left: `${position.y}px`,
          transform: `scaleX(${isGoRight})`,
        }}
      />
    </div>
  );
};

export default Pikachu;
