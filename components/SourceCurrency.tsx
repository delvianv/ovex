import { StyleSheet, View } from "react-native";

import CurrencyInput from "./CurrencyInput";
import InputLabel from "./InputLabel";

export default function SourceCurrency() {
  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE CURRENCY" />
      <CurrencyInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
