import { useEffect, useState } from "react";
import { useToast } from "../context/toast.context";

const Toast = ({ title, content, time }) => {
  const toast = useToast();

  const [isShowing, setIsShowing] = useState(false); // Toast Open or Close

  useEffect(() => {
    setIsShowing(true);

    setTimeout(() => {
      setIsShowing(false);
    }, time);
  }, [time, title, content]);

  return (
    <div
      className={`shadow-lg bg-white flex flex-col p-6 border rounded-lg gap-2 w-[320px] transition-all duration-500 ${
        isShowing ? "translate-x-0" : "translate-x-[360px]"
      }`}
    >
      <h3 className="font-bold text-overflow">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Toast;
