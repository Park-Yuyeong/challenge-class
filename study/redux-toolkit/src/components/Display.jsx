import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((state) => state.counter.count);

  return <div>{count}</div>;
};

export default Display;
