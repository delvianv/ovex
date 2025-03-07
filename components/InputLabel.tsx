import { StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

interface LabelProps {
  text: string;
}

export default function InputLabel({ text }: LabelProps) {
  return <Text style={styles.inputLabel}>{text}</Text>;
}

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: FontFamily.inputLabel,
    fontSize: FontSize.inputLabel,
    color: Color.inputLabel,
  },
});
