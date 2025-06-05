import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

interface ButtonProps {
  text: string;
  active: string;
  onPress: (tab: string) => void;
}

export default function TabButton({ text, active, onPress }: ButtonProps) {
  return (
    <Pressable onPress={() => onPress(text)}>
      <Text style={active === text ? styles.active : styles.inactive}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  active: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.label,
    color: "#5589FF",
  },
  inactive: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.label,
    color: colors.label,
  },
});
