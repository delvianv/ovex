import { useState } from "react";
import { StyleSheet, View } from "react-native";

import TabButton from "./TabButton";

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabContainer({ activeTab, setActiveTab }: TabProps) {
  return (
    <View style={styles.container}>
      <TabButton
        text="Crypto"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabButton
        text="Fiat"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
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
