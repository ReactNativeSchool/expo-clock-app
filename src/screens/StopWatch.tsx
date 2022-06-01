import { StyleSheet, ScrollView, ViewStyle, TextStyle } from "react-native";

import { Text, View, StatusBar, SafeAreaView } from "components/themed";
import { CircleButton } from "components/buttons";
import { useStopWatch } from "hooks/useStopWatch";
import useColorScheme from "hooks/useColorScheme";
import Colors from "constants/Colors";

const LapRow = ({
  lap,
  time,
  isFirst,
  style,
}: {
  lap: number;
  time: string;
  isFirst: boolean;
  style?: "green" | "red";
}) => {
  const theme = useColorScheme();

  const borderColor = Colors[theme].border;
  const rowStyles: ViewStyle[] = [
    styles.lapRow,
    { borderBottomColor: borderColor },
  ];
  const textStyles: TextStyle[] = [styles.lapText];

  if (isFirst) {
    rowStyles.push({ borderTopColor: borderColor });
  }

  if (style === "green") {
    textStyles.push({ color: Colors[theme].btnBgGreen, fontWeight: "bold" });
  } else if (style === "red") {
    textStyles.push({ color: Colors[theme].btnBgRed, fontWeight: "bold" });
  }

  return (
    <View style={rowStyles}>
      <Text style={textStyles}>Lap {lap}</Text>
      <Text style={textStyles}>{time}</Text>
    </View>
  );
};

const StopWatch = () => {
  const {
    time,
    isRunning,
    start,
    stop,
    reset,
    lap,
    laps,
    currentLapTime,
    hasStarted,
    slowestLapTime,
    fastestLapTime,
  } = useStopWatch();

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
          {hasStarted && (
            <LapRow time={currentLapTime} lap={laps.length + 1} isFirst />
          )}
          {laps.map((lapInfo) => {
            let style: "green" | "red" | undefined;
            if (lapInfo.time === fastestLapTime) {
              style = "green";
            } else if (lapInfo.time === slowestLapTime) {
              style = "red";
            }

            return (
              <LapRow
                key={lapInfo.lap}
                time={lapInfo.time}
                lap={lapInfo.lap}
                isFirst={false}
                style={style}
              />
            );
          })}
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
    fontVariant: ["tabular-nums"], // fixed width character
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
    fontVariant: ["tabular-nums"], // fixed width character
  },
});

export default StopWatch;
