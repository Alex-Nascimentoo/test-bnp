import { createContext, useContext, useState } from "react";

// Possible status for the toast message
type TToastMessageStatus = "success" | "error" | "";

// Properties that may be imported from other components
type TToastMessageProps = {
  status: TToastMessageStatus;
  showMessage: (status: TToastMessageStatus) => void;
};

const ToastMessageContext = createContext<TToastMessageProps>({} as TToastMessageProps);

const ToastMessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<TToastMessageStatus>('');

  // Show and disapear the toast message
  function showMessage(status: TToastMessageStatus) {
    setStatus(status);

    // Wait 3 seconds before desapearing
    setTimeout(() => setStatus(''), 3000);
  }

  return (
    <ToastMessageContext.Provider value={{
      status,
      showMessage
    }}>
      { children }
    </ToastMessageContext.Provider>
  );
}

// Make the properties on TToastMessageProps available
function useToastMessage() {
  const context = useContext(ToastMessageContext);
  return context;
}

export { ToastMessageContext, ToastMessageProvider, useToastMessage }