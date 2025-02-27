import { StyleSheet, Text, TextInput, View } from "react-native";

import InputLabel from "./InputLabel";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

export default function AmountInput() {
  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="$0"
          placeholderTextColor={Color.amountText}
          inputMode="numeric"
          style={styles.input}
        />
        <Text style={styles.currency}>USD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 42,
  },
  inputContainer: {
    backgroundColor: Color.inputBackground,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    elevation: 1,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.amountText,
  },
  currency: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.amountText,
    color: Color.amountText,
  },
});
