import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

import Colors from "constants/Colors";

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return "dark";
  return _useColorScheme() as NonNullable<ColorSchemeName>;
};

export function useThemeColors() {
  const theme = useColorScheme();
  return {
    theme,
    colors: Colors[theme],
  };
}
