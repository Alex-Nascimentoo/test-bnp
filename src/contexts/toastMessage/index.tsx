import { createContext, useContext, useState } from "react";

type TToastMessageStatus = "success" | "error" | "";

type TToastMessageProps = {
  status: TToastMessageStatus;
  showMessage: (status: TToastMessageStatus) => void;
};

const ToastMessageContext = createContext<TToastMessageProps>({} as TToastMessageProps);

const ToastMessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<TToastMessageStatus>('');

  function showMessage(status: TToastMessageStatus) {
    setStatus(status);

    setTimeout(() => setStatus(''), 3000);
  }
  
  // const showMessage = (status: TToastMessageStatus) => {
  //   setStatus(status);

  //   setTimeout(() => setStatus(''), 3000);
  // }

  return (
    <ToastMessageContext.Provider value={{
      status,
      showMessage
    }}>
      { children }
    </ToastMessageContext.Provider>
  );
}

function useToastMessage() {
  const context = useContext(ToastMessageContext);
  return context;
}

export { ToastMessageContext, ToastMessageProvider, useToastMessage }