import { StyleSheet, View } from "react-native";

import TabButton from "./TabButton";

interface TabProps {
  activeTab: string;
  handleChangeTab: (tab: string) => void;
}

export default function TabContainer({ activeTab, handleChangeTab }: TabProps) {
  return (
    <View style={styles.container}>
      <TabButton
        text="Crypto"
        activeTab={activeTab}
        handleChangeTab={handleChangeTab}
      />
      <TabButton
        text="Fiat"
        activeTab={activeTab}
        handleChangeTab={handleChangeTab}
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
