import { StyleSheet, View } from "react-native";
import TabButton from "./TabButton";

interface ContainerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabContainer({
  activeTab,
  setActiveTab,
}: ContainerProps) {
  return (
    <View style={styles.container}>
      <TabButton text="Crypto" active={activeTab} setActive={setActiveTab} />
      <TabButton text="Fiat" active={activeTab} setActive={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
});
