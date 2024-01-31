import { ToastMessageProvider } from "./toastMessage";

// Good practice in case of multiple contexts
export default function AppProvider({children}: { children: React.ReactNode }) {
  return (
    <ToastMessageProvider>
      { children }
    </ToastMessageProvider>
  );
} 