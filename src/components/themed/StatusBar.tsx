import { StatusBar as DefaultStatusBar } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";

import { StatusBarProps } from "./types";

export const StatusBar = (props: StatusBarProps) => {
  const { theme } = useThemeColors();

  const barStyle = theme === "dark" ? "light-content" : "dark-content";

  return <DefaultStatusBar barStyle={barStyle} {...props} />;
};
