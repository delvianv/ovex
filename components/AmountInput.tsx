import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import InputContainer from "./InputContainer";
import InputLabel from "./InputLabel";

export default function AmountInput() {
  const [amount, setAmount] = useState("0");

  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      <InputContainer>
        <Text style={styles.text}>$</Text>
        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          inputMode="numeric"
          style={[styles.text, { flex: 1 }]}
        />
        <Text style={styles.text}>USD</Text>
      </InputContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  text: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.text,
    color: colors.text,
  },
});
