import { Text as DefaultText, TextProps } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
  );
};
