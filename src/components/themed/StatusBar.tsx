import { StatusBar as DefaultStatusBar } from "react-native";

import useColorScheme from "hooks/useColorScheme";

import { StatusBarProps } from "./types";

export const StatusBar = (props: StatusBarProps) => {
  const theme = useColorScheme();

  const barStyle = theme === "dark" ? "light-content" : "dark-content";

  return <DefaultStatusBar barStyle={barStyle} {...props} />;
};
