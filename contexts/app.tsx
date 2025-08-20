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
    // Only access environment variables on client side for Edge Runtime compatibility
    if (typeof window !== 'undefined') {
      return process.env.NEXT_PUBLIC_DEFAULT_THEME || "";
    }
    return "";
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
