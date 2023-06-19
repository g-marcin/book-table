import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";

type ThemeContextType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  setIsDark: (isDark: boolean) => {
    return isDark;
  },
});
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (!theme) {
      return;
    }
    setIsDark(!(theme === "dark"));
    document.body.setAttribute("data-bs-theme", `${isDark ? "dark" : "light"}`);
  }, [isDark]);

  const toggleTheme = (isDark: boolean) => {
    setIsDark(!isDark);
    window.localStorage.setItem("theme", `${isDark ? "dark" : "light"}`);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        setIsDark: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
