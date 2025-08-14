"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

import { ContextValue } from "@/types/context";

const AppContext = createContext({} as ContextValue);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(() => {
    return process.env.NEXT_PUBLIC_DEFAULT_THEME || "";
  });

  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        showFeedback,
        setShowFeedback,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
