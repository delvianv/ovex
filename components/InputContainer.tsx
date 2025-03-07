import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import { SourceCurrency } from "../contexts/CurrencyContext";

export default function InputContainer() {
  const sourceCurrency = useContext(SourceCurrency);

  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInput label="SOURCE CURRENCY" />
      {sourceCurrency && <CurrencyInput label="DESTINATION CURRENCY" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
});
