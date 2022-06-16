import { Pressable, StyleSheet } from "react-native";

import { View, Text } from "components/themed";
import { useThemeColors } from "hooks/useThemeColors";

type CircleButtonProps = {
  onPress: () => void;
  children: string;
  color?: "green" | "red";
};

export const CircleButton = ({
  onPress,
  children,
  color,
}: CircleButtonProps) => {
  const { colors } = useThemeColors();

  let btnColor = colors.btnBg;
  let txtColor = colors.btnText;

  if (color === "green") {
    btnColor = colors.btnBgGreen;
    txtColor = colors.btnTextGreen;
  }

  if (color === "red") {
    btnColor = colors.btnBgRed;
    txtColor = colors.btnTextRed;
  }

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.btnBorder, { borderColor: btnColor }]}>
        <View style={[styles.btn, { backgroundColor: btnColor }]}>
          <Text style={[styles.text, { color: txtColor }]}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBorder: {
    borderWidth: 2,
    padding: 3,
    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: "600",
  },
});
