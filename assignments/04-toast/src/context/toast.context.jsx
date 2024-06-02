import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import Toast from "../components/Toast.jsx";

const initialValue = {
  open: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const value = {
    open: ({ title, content, time }) => {
      setToasts((prev) => [...prev, { title, content, time, id: uuid() }]);
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-6 bottom-6 flex flex-col gap-6">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              title={toast.title}
              content={toast.content}
              time={toast.time}
            />
          ))}
      </div>
    </ToastContext.Provider>
  );
}
