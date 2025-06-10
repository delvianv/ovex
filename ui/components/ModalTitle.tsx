import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

export default function ModalTitle() {
  return <Text style={styles.text}>Select Currency</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.modalTitle,
    color: colors.text,
    textAlign: "center",
  },
});
