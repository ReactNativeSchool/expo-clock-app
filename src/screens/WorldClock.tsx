import { StyleSheet } from "react-native";

import { Text, View } from "components/themed";
import { useThemeColor } from "src/hooks/useThemeColor";

export default () => {
  const textColor = useThemeColor({}, "textSubtle");

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>No World Clocks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
  },
});
