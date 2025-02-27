import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import { Color } from "../constants/Color";

export default function InputContainer() {
  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInput text="SOURCE CURRENCY" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.inputContainerBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
});
