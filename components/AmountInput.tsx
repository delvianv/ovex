import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";
import InputContainer from "./InputContainer";
import InputLabel from "./InputLabel";

export default function AmountInput() {
  const [amount, setAmount] = useState("0");

  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      <InputContainer>
        <Text style={styles.inputText}>$</Text>
        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          inputMode="numeric"
          style={[styles.inputText, { flex: 1 }]}
        />
        <Text style={styles.inputText}>USD</Text>
      </InputContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputText: {
    fontFamily: "Nunito_700Bold",
    fontSize: fontSize.inputText,
    color: colors.inputText,
  },
});
