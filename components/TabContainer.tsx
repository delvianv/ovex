import { StyleSheet, View } from "react-native";

import TabButton from "./TabButton";

interface TabProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export default function TabContainer({ activeTab, onChangeTab }: TabProps) {
  return (
    <View style={styles.container}>
      <TabButton
        text="Crypto"
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      <TabButton text="Fiat" activeTab={activeTab} onChangeTab={onChangeTab} />
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
