import { Pressable, StyleSheet } from "react-native";

import { View, Text } from "components/themed";
import Colors from "constants/Colors";
import useColorScheme from "hooks/useColorScheme";

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
  const theme = useColorScheme();

  let btnColor = Colors[theme].btnBg;
  let txtColor = Colors[theme].btnText;

  if (color === "green") {
    btnColor = Colors[theme].btnBgGreen;
    txtColor = Colors[theme].btnTextGreen;
  }

  if (color === "red") {
    btnColor = Colors[theme].btnBgRed;
    txtColor = Colors[theme].btnTextRed;
  }

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.btnBorder, { borderColor: btnColor }]}>
        <View style={styles.btn} darkColor={btnColor} lightColor={btnColor}>
          <Text style={styles.text} darkColor={txtColor} lightColor={txtColor}>
            {children}
          </Text>
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
