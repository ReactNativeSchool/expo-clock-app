import React, { createContext, useContext, useState } from "react";

export const Themes: ITheme[] = ["light", "dark", "forest"];
export type ITheme = null | "light" | "dark" | "forest";

type IThemeContext = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  let isDark = false;

  if (context.theme && ["dark", "forest"].includes(context.theme)) {
    isDark = true;
  }

  return {
    isDark,
    theme: context.theme,
    setTheme: context.setTheme,
  };
};
