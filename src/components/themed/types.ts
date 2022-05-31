import { View, Text, StatusBar } from "react-native";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & View["props"];
export type TextProps = ThemeProps & Text["props"];
export type StatusBarProps = StatusBar["props"];
