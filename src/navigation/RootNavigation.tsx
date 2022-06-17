import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import BottomTabs from "navigation/BottomTabs";
import { useThemeColors } from "hooks/useThemeColors";

const RootNavigation = () => {
  const { colors } = useThemeColors();

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

  return (
    <NavigationContainer theme={navigationTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
