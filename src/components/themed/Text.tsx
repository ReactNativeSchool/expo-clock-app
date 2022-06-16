import { Text as DefaultText } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";
import { TextProps } from "./types";

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
  );
};
