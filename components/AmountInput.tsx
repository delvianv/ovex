import { StyleSheet, Text, TextInput, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function AmountInput() {
  return (
    <View style={styles.container}>
      <Text style={styles.amountInput}>$</Text>
      <TextInput
        placeholder="0"
        placeholderTextColor={Color.amountInput}
        inputMode="numeric"
        style={[styles.amountInput, { flex: 1 }]}
      />
      <Text style={styles.amountInput}>USD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Color.inputBackground,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 1,
    height: 56,
  },
  amountInput: {
    fontFamily: FontFamily.amountInput,
    fontSize: FontSize.amountInput,
    color: Color.amountInput,
  },
});
