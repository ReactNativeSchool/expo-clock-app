import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "navigation/BottomTabs";
import useColorScheme from "hooks/useColorScheme";

import {
  ReactNavigationLightTheme,
  ReactNavigationDarkTheme,
} from "constants/Colors";

const RootNavigation = () => {
  const theme = useColorScheme();

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
