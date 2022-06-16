// Colors
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js

// https://dribbble.com/shots/10839777-iOS-Clock-App-Light-and-Dark-Theme

import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const white = "#fff";
export const black = "#000000";

const Themes = {
  light: {
    text: black,
    textSubtle: "#595959",

    background: white,
    border: "#ccc",

    tabBarActive: "#F47C7C",
    tabBarInactive: "#757575",

    btnBg: "#dbdbdb",
    btnText: "#333333",

    btnBgRed: "#e83f34",
    btnTextRed: "#320e0b",

    btnBgGreen: "#94ebab",
    btnTextGreen: "#0e3f1a",
  },
  dark: {
    text: white,
    textSubtle: "#595959",

    background: black,
    border: "#ccc",

    tabBarActive: "#ff9f06",
    tabBarInactive: "#757575",

    btnBg: "#333333",
    btnText: white,

    btnBgRed: "#320e0b",
    btnTextRed: "#e83f34",

    btnBgGreen: "#082a11",
    btnTextGreen: "#26ae49",
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
