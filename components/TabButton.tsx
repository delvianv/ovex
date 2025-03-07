import { Pressable, StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

interface ButtonProps {
  text: string;
  active: string;
  setActive: (tab: string) => void;
}

export default function TabButton({ text, active, setActive }: ButtonProps) {
  return (
    <Pressable onPress={() => setActive(text)}>
      <Text style={active === text ? styles.active : styles.inactive}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  active: {
    fontFamily: FontFamily.activeTab,
    fontSize: FontSize.tabs,
    color: Color.activeTab,
    borderBottomWidth: 2,
    borderBottomColor: Color.activeTab,
  },
  inactive: {
    fontFamily: FontFamily.inactiveTab,
    fontSize: FontSize.tabs,
    color: Color.inactiveTab,
  },
});
