import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "navigation/BottomTabs";
import { useThemeColors } from "hooks/useThemeColors";

import {
  ReactNavigationLightTheme,
  ReactNavigationDarkTheme,
} from "constants/Colors";

const RootNavigation = () => {
  const { theme } = useThemeColors();

  return (
    <NavigationContainer
      theme={
        theme === "dark" ? ReactNavigationDarkTheme : ReactNavigationLightTheme
      }
    >
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
