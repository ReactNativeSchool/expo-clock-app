import { Text as DefaultText } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";

export type TextProps = DefaultText["props"];

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultText style={[{ color: colors.text }, style]} {...otherProps} />
  );
};
