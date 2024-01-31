import { ToastMessageProvider } from "./toastMessage";

export default function AppProvider({children}: { children: React.ReactNode }) {
  return (
    <ToastMessageProvider>
      { children }
    </ToastMessageProvider>
  );
} 