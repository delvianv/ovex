import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";

interface ButtonProps {
  text: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabButton({
  text,
  activeTab,
  setActiveTab,
}: ButtonProps) {
  return (
    <Pressable onPress={() => setActiveTab(text)}>
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
    color: Colors.activeTab,
    borderBottomWidth: 2,
    borderBottomColor: Colors.activeTab,
  },
  inactiveTab: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.tabText,
    color: Colors.inactiveTab,
  },
});
