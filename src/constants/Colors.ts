// Colors
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js

// https://dribbble.com/shots/10839777-iOS-Clock-App-Light-and-Dark-Theme

import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const white = "#FDFFFC";
export const black = "#000000";

const Themes = {
  light: {
    text: "#011627",
    textSubtle: "#AAB3BB",
    textGreen: "#2EC4B6",
    textRed: "#E71D36",

    background: white,
    border: "#CCD2D7",

    tabBarActive: "#E59B36",
    tabBarInactive: "#84929E",

    btnBg: "#C5D0D8",
    btnText: "#FCFCFD",

    btnBgRed: "#E71D36",
    btnTextRed: white,

    btnBgGreen: "#2EC4B6",
    btnTextGreen: "#F7FDFC",
  },
  dark: {
    text: white,
    textSubtle: "#AAB3BB",
    textGreen: "#2EC4B6",
    textRed: "#E71D36",

    background: "#011627",
    border: "#434D56",

    tabBarActive: "#FF9F1C",
    tabBarInactive: "#5A6772",

    btnBg: "#445664",
    btnText: white,

    btnBgRed: "#E71D36",
    btnTextRed: white,

    btnBgGreen: "#2EC4B6",
    btnTextGreen: white,
  },
};

export const ReactNavigationLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Themes.light.tabBarActive,
    background: Themes.light.background,
    card: Themes.light.background,
    text: Themes.light.text,
    border: "transparent",
  },
};

export const ReactNavigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Themes.dark.tabBarActive,
    background: Themes.dark.background,
    card: Themes.dark.background,
    text: Themes.dark.text,
    border: "transparent",
  },
};

export default Themes;
