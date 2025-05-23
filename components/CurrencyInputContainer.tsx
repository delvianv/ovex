import { StyleSheet, View } from "react-native";

import CurrencyInput from "./CurrencyInput";

export default function CurrencyInputContainer() {
  return (
    <View style={styles.container}>
      <CurrencyInput
        label="SOURCE CURRENCY"
        placeholder="Select a source currency"
      />
      <CurrencyInput
        label="DESTINATION CURRENCY"
        placeholder="Select a destination currency"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
});
