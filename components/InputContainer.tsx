import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import { Colors } from "../constants/Colors";

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
    backgroundColor: Colors.inputContainerBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
});
