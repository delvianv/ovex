import { StyleSheet, View } from "react-native";

import TabButton from "../components/TabButton";

interface ContainerProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

export default function TabContainer({
  activeTab,
  setActiveTab,
}: ContainerProps) {
  return (
    <View style={styles.container}>
      <TabButton text="Crypto" active={activeTab} onPress={setActiveTab} />
      <TabButton text="Fiat" active={activeTab} onPress={setActiveTab} />
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
