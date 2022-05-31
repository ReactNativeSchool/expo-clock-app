import { Text as DefaultText } from "react-native";

import { useThemeColor } from "./useThemeColor";
import { TextProps } from "./types";

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};
