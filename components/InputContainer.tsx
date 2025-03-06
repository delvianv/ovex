import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";

export default function InputContainer() {
  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInput label="SOURCE CURRENCY" />
      <CurrencyInput label="DESTINATION CURRENCY" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
});
