import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "navigation/RootNavigation";
import { ThemeProvider } from "context/Theme";

export default () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  </SafeAreaProvider>
);
