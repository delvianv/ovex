import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import InputLabel from "./InputLabel";

export default function SourceAmount() {
  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      <AmountInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
