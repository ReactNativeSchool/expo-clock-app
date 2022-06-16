import { StyleSheet, ScrollView, ViewStyle, TextStyle } from "react-native";

import { Text, View } from "components/themed";
import { LapData } from "hooks/useStopWatch";
import { useThemeColors } from "hooks/useThemeColors";

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
  const { colors } = useThemeColors();

  const borderColor = colors.border;
  const rowStyles: ViewStyle[] = [
    styles.lapRow,
    { borderBottomColor: borderColor },
  ];
  const textStyles: TextStyle[] = [styles.lapText];

  if (isFirst) {
    rowStyles.push({ borderTopColor: borderColor });
  }

  if (style === "green") {
    textStyles.push({ color: colors.textGreen, fontWeight: "bold" });
  } else if (style === "red") {
    textStyles.push({ color: colors.textRed, fontWeight: "bold" });
  }

  return (
    <View style={rowStyles}>
      <Text style={textStyles}>Lap {lap}</Text>
      <Text style={textStyles}>{time}</Text>
    </View>
  );
};

type LapListProps = {
  hasStarted: boolean;
  currentLapTime: string;
  fastestLapTime: string;
  slowestLapTime: string;
  laps: LapData[];
};

export const LapList = ({
  hasStarted,
  currentLapTime,
  laps,
  fastestLapTime,
  slowestLapTime,
}: LapListProps) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
