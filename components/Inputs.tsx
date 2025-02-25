import { StyleSheet, Text, TextInput, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";

export default function Inputs() {
  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInput text="SOURCE CURRENCY" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFC",
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
});
