import { StyleSheet, Text } from "react-native";

interface LabelProps {
  text: string;
}

export default function InputLabel({ text }: LabelProps) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Gilroy-Regular",
    fontSize: 16,
    color: "#8E8D99",
  },
});
