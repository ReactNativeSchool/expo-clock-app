import { View as DefaultView } from "react-native";
import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";

import { useThemeColors } from "hooks/useThemeColors";
import { ViewProps } from "./types";

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}

export const SafeAreaView = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
};
