import { PropsWithChildren } from "react";

interface CounterButtonProps {
  onClick: () => void;
}

const CounterButton = ({
  children,
  onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default CounterButton;
