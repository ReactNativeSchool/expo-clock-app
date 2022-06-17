import { useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import BottomTabs from "navigation/BottomTabs";
import { useThemeColors } from "hooks/useThemeColors";
import { useCustomTheme } from "context/Theme";

const RootNavigation = () => {
  const { colors } = useThemeColors();
  const theme = useCustomTheme();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...DefaultTheme.colors,
      primary: colors.tabBarActive,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: "transparent",
    },
  };

  // Prevents a flash of the wrong theme
  useEffect(() => {
    if (theme.loading === false) {
      SplashScreen.hideAsync();
    }
  }, [theme.loading]);

  return (
    <NavigationContainer theme={navigationTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
