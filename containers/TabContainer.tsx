import { useState } from "react";
import { StyleSheet, View } from "react-native";

import TabButton from "@/components/TabButton";

export default function TabContainer() {
  const [activeTab, setActiveTab] = useState("Crypto");

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
