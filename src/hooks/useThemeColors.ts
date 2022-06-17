import Colors from "constants/Colors";
import { useCustomTheme } from "context/Theme";

export function useThemeColors() {
  const customTheme = useCustomTheme();

  const activeTheme = customTheme.theme;

  return {
    theme: customTheme.theme,
    isDark: customTheme.isDark || activeTheme === "dark",
    colors: Colors[activeTheme],
  };
}
