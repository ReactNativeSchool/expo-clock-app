import { StyleSheet } from "react-native";

import { Text, View, StatusBar, SafeAreaView } from "components/themed";
import { CircleButton } from "components/buttons";

const StopWatch = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.timeText}>00:00:00</Text>
        <View style={styles.row}>
          <CircleButton onPress={() => alert("todo")}>Reset</CircleButton>
          <CircleButton onPress={() => alert("todo")} color="green">
            Start
          </CircleButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  timeText: {
    fontSize: 60,
    fontWeight: "300",
    marginTop: 100,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 100,
  },
});

export default StopWatch;
