import { SafeAreaProvider } from "react-native-safe-area-context";

import StopWatch from "screens/StopWatch";

export default () => (
  <SafeAreaProvider>
    <StopWatch />
  </SafeAreaProvider>
);
