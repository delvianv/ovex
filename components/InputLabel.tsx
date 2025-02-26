import { StyleSheet, Text } from "react-native";

import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";

interface LabelProps {
  text: string;
}

export default function InputLabel({ text }: LabelProps) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Colors.inputLabel,
  },
});
