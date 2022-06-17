import React, { createContext, useContext, useState } from "react";

export type Themes = null | "light" | "dark";

type IThemeContext = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  return {
    theme: context.theme,
    setTheme: context.setTheme,
  };
};
