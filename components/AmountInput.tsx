import { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import InputLabel from "./InputLabel";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { AmountContext, SetAmountContext } from "../contexts/AmountContext";

export default function AmountInput() {
  const amount = useContext(AmountContext);
  const setAmount = useContext(SetAmountContext);

  const handleChangeText = (text: string) => {
    const amount = parseFloat(text);

    if (!isNaN(amount)) {
      setAmount(amount);
    } else {
      setAmount(0);
    }
  };

  return (
    <View style={{ gap: 8 }}>
      <InputLabel text="SOURCE AMOUNT" />
      <View style={styles.container}>
        <Text style={styles.amountInput}>$</Text>
        <TextInput
          value={amount.toString()}
          onChangeText={handleChangeText}
          inputMode="numeric"
          style={[styles.amountInput, { flex: 1 }]}
        />
        <Text style={styles.amountInput}>USD</Text>
      </View>
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
