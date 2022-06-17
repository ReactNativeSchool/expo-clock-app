import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return "dark";
  return _useColorScheme() as NonNullable<ColorSchemeName>;
};
