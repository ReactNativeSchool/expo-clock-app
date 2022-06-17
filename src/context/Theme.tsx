import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "hooks/useColorScheme";

export const Themes: ITheme[] = ["light", "dark", "forest"];
export type ITheme = "light" | "dark" | "forest";

type IThemeContext = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
  loading: boolean;
};

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
  loading: true,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ITheme>(systemTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("@user_preferred_theme")
      .then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme as ITheme);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@user_preferred_theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loading }}>
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
    loading: context.loading,
  };
};
