import React from "react";
import {
  ScrollView,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import { View, Text } from "components/themed";
import { useThemeColors } from "hooks/useThemeColors";
import { useCustomTheme, Themes } from "context/Theme";

const Border = () => {
  const { colors } = useThemeColors();

  return <View style={[styles.border, { backgroundColor: colors.border }]} />;
};

type ThemeRowProps = {
  children: string;
  checked?: boolean;
  onPress: () => void;
};

const ThemeRow = ({ children, checked, onPress }: ThemeRowProps) => {
  const { colors } = useThemeColors();

  const checkedStyle: ViewStyle[] = [
    styles.checkbox,
    { borderColor: colors.text },
  ];

  if (checked) {
    checkedStyle.push({
      borderColor: colors.textGreen,
      backgroundColor: colors.textGreen,
    });
  }

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={checkedStyle} />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  const { theme, setTheme } = useCustomTheme();

  return (
    <ScrollView style={styles.container}>
      {Themes.map((key, index) => (
        <React.Fragment key={key}>
          <ThemeRow onPress={() => setTheme(key)} checked={theme === key}>
            {key}
          </ThemeRow>
          {index !== Themes.length - 1 && <Border />}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  border: {
    flex: 1,
    height: 1,
    backgroundColor: "red",
  },

  row: {
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
});
