import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

export default function Title() {
  return <Text style={styles.text}>Convert Currency</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.title,
    color: colors.text,
    textAlign: "center",
    marginTop: 48,
  },
});
