import React, { createContext, useContext, useState } from "react";

import { useColorScheme } from "hooks/useColorScheme";

export const Themes: ITheme[] = ["light", "dark", "forest"];
export type ITheme = "light" | "dark" | "forest";

type IThemeContext = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ITheme>(systemTheme);

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
