import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

interface LabelProps {
  text: string;
}

export default function InputLabel({ text }: LabelProps) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.inputLabel,
    fontSize: fontSize.inputLabel,
    color: colors.inputLabel,
  },
});
