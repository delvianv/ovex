import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

interface LabelProps {
  text: string;
}

export default function InputLabel({ text }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputLabel: {
    fontFamily: FontFamily.inputLabel,
    fontSize: FontSize.inputLabel,
    color: Color.inputLabel,
  },
});
