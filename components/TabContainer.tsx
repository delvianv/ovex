import { StyleSheet, View } from "react-native";
import TabButton from "./TabButton";

export default function TabContainer() {
  return (
    <View style={styles.container}>
      <TabButton text="Crypto" />
      <TabButton text="Fiat" />
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
