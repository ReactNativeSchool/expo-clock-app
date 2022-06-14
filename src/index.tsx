import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "navigation/RootNavigation";

export default () => (
  <SafeAreaProvider>
    <RootNavigation />
  </SafeAreaProvider>
);
