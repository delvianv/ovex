import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { TabContext, SetTabContext } from "../contexts/TabContext";

interface ButtonProps {
  text: string;
}

export default function TabButton({ text }: ButtonProps) {
  const active = useContext(TabContext);
  const setActive = useContext(SetTabContext);

  return (
    <Pressable onPress={() => setActive(text)}>
      <Text style={active === text ? styles.activeTab : styles.inactiveTab}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    fontFamily: FontFamily.activeTab,
    fontSize: FontSize.tabs,
    color: Color.activeTab,
    borderBottomWidth: 2,
    borderBottomColor: Color.activeTab,
  },
  inactiveTab: {
    fontFamily: FontFamily.inactiveTab,
    fontSize: FontSize.tabs,
    color: Color.inactiveTab,
  },
});
