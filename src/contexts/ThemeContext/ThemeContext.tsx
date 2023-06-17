import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";

type ThemeContextType = {
  isDark: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
});
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (!theme) {
      return;
    }
    setIsDark(theme === "dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark: false,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
