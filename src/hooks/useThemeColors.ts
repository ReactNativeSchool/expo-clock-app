import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

import Colors from "constants/Colors";
import { useCustomTheme } from "context/Theme";

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return "dark";
  return _useColorScheme() as NonNullable<ColorSchemeName>;
};

export function useThemeColors() {
  const theme = useColorScheme();
  const customTheme = useCustomTheme();

  // Could just set the default theme to be the system color scheme
  const activeTheme = customTheme.theme ? customTheme.theme : theme;

  return {
    theme: activeTheme,
    isDark: customTheme.isDark || activeTheme === "dark",
    colors: Colors[activeTheme],
  };
}
