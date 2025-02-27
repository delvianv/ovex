import { Pressable, StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface ButtonProps {
  text: string;
  activeTab: string;
  handleChangeTab: (tab: string) => void;
}

export default function TabButton({
  text,
  activeTab,
  handleChangeTab,
}: ButtonProps) {
  return (
    <Pressable onPress={() => handleChangeTab(text)}>
      <Text style={activeTab === text ? styles.activeTab : styles.inactiveTab}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.tabText,
    color: Color.activeTab,
    borderBottomWidth: 2,
    borderBottomColor: Color.activeTab,
  },
  inactiveTab: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.tabText,
    color: Color.inactiveTab,
  },
});
