// Colors
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js

// https://dribbble.com/shots/10839777-iOS-Clock-App-Light-and-Dark-Theme

import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const white = "#fff";
export const black = "#000000";

const Themes = {
  light: {
    text: black,
    background: white,
    border: "#ccc",

    btnBg: "#dbdbdb",
    btnText: "#333333",

    btnBgRed: "#e83f34",
    btnTextRed: "#320e0b",

    btnBgGreen: "#94ebab",
    btnTextGreen: "#0e3f1a",
  },
  dark: {
    text: white,
    background: black,
    border: "#ccc",

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
    primary: "#e8513c",
    background: Themes.light.background,
    card: Themes.light.background,
    text: Themes.light.text,
    border: Themes.light.border,
  },
};

export const ReactNavigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#f45357",
    background: Themes.dark.background,
    card: Themes.dark.background,
    text: Themes.dark.text,
    border: Themes.dark.border,
  },
};

export default Themes;
