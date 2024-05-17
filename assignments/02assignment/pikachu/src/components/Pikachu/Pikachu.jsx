import pikachuImage from "../../assets/pikachu.png";
import "./Pikachu.css";

const Pikachu = ({ position, direction }) => {
  return (
    <div>
      <img
        id="image-pikachu"
        src={pikachuImage}
        style={{
          top: `${position.x}px`,
          left: `${position.y}px`,
          transform: `scaleX(${direction})`,
        }}
      />
    </div>
  );
};

export default Pikachu;
