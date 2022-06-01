import { StyleSheet, ScrollView, ViewStyle } from "react-native";

import { Text, View, StatusBar, SafeAreaView } from "components/themed";
import { CircleButton } from "components/buttons";
import { useStopWatch } from "hooks/useStopWatch";
import useColorScheme from "hooks/useColorScheme";
import Colors from "constants/Colors";

const LapRow = ({
  lap,
  time,
  isFirst,
}: {
  lap: number;
  time: string;
  isFirst: boolean;
}) => {
  const theme = useColorScheme();

  const borderColor = Colors[theme].border;
  const rowStyles: ViewStyle[] = [
    styles.lapRow,
    { borderBottomColor: borderColor },
  ];

  if (isFirst) {
    rowStyles.push({ borderTopColor: borderColor });
  }

  return (
    <View style={rowStyles}>
      <Text style={styles.lapText}>Lap {lap}</Text>
      <Text style={styles.lapText}>{time}</Text>
    </View>
  );
};

const StopWatch = () => {
  const { time, isRunning, start, stop, reset, lap, laps } = useStopWatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.timeText}>{time}</Text>

        <View style={styles.row}>
          <CircleButton
            onPress={() => {
              isRunning ? lap() : reset();
            }}
          >
            {isRunning ? "Lap" : "Reset"}
          </CircleButton>
          <CircleButton
            onPress={() => {
              isRunning ? stop() : start();
            }}
            color={isRunning ? "red" : "green"}
          >
            {isRunning ? "Stop" : "Start"}
          </CircleButton>
        </View>

        <ScrollView style={styles.lapsContainer}>
          {laps.map((lapInfo, index) => (
            <LapRow
              key={lapInfo.lap}
              time={lapInfo.time}
              lap={lapInfo.lap}
              isFirst={index === 0}
            />
          ))}
        </ScrollView>
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

  lapsContainer: {
    flex: 1,
    width: "100%",
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  lapRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "transparent",
    paddingVertical: 10,
  },
  lapText: {
    fontSize: 18,
    fontVariant: ["tabular-nums"], // fixed with character
  },
});

export default StopWatch;
