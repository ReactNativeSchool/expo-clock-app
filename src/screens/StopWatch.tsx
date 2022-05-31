import { StyleSheet } from "react-native";

import { Text, View, StatusBar, SafeAreaView } from "components/themed";
import { CircleButton } from "components/buttons";
import { useStopWatch } from "hooks/useStopWatch";

const StopWatch = () => {
  const { time, isRunning, start, stop, reset } = useStopWatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.timeText}>{time}</Text>

        <View style={styles.row}>
          <CircleButton onPress={() => reset()}>Reset</CircleButton>
          <CircleButton
            onPress={() => {
              isRunning ? stop() : start();
            }}
            color={isRunning ? "red" : "green"}
          >
            {isRunning ? "Stop" : "Start"}
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
    fontVariant: ["tabular-nums"], // fixed with character
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
