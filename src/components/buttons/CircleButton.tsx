import { Pressable, StyleSheet } from "react-native";

import { View, Text } from "components/themed";
import { white, slate, red, green } from "constants/Colors";
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

  let btnColorDark = slate["600"];
  let txtColorDark = slate["100"];

  let btnColorLight = slate["500"];
  let txtColorLight = slate["100"];

  if (color === "green") {
    btnColorDark = green["700"];
    txtColorDark = green["100"];

    btnColorLight = green["700"];
    txtColorLight = green["100"];
  }

  if (color === "red") {
    btnColorDark = red["700"];
    txtColorDark = red["100"];

    btnColorLight = red["700"];
    txtColorLight = red["100"];
  }

  const borderColor = theme === "dark" ? btnColorDark : btnColorLight;

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.btnBorder, { borderColor }]}>
        <View
          style={styles.btn}
          darkColor={btnColorDark}
          lightColor={btnColorLight}
        >
          <Text
            style={styles.text}
            darkColor={txtColorDark}
            lightColor={txtColorLight}
          >
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
    fontSize: 15,
  },
});
