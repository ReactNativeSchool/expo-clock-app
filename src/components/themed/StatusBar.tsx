import { StatusBar as DefaultStatusBar, StatusBarProps } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";

export const StatusBar = (props: StatusBarProps) => {
  const { isDark } = useThemeColors();

  const barStyle = isDark ? "light-content" : "dark-content";

  return <DefaultStatusBar barStyle={barStyle} {...props} />;
};
