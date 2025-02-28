import { StyleSheet, Text, TextInput, View } from "react-native";

import InputLabel from "./InputLabel";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { Currency } from "../App";

interface InputProps {
  amount: number;
  setAmount: (amount: number) => void;
  currency: Currency | undefined;
}

export default function AmountInput({
  amount,
  setAmount,
  currency,
}: InputProps) {
  const handleTextChanged = (text: string) => {
    const amount = parseFloat(text);

    if (!isNaN(amount)) {
      setAmount(amount);
    } else {
      setAmount(0);
    }
  };

  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      <View style={styles.inputContainer}>
        <Text style={styles.currency}>{currency ? currency.symbol : "$"}</Text>
        <TextInput
          value={amount.toString()}
          onChangeText={handleTextChanged}
          inputMode="numeric"
          style={[styles.currency, styles.input]}
        />
        <Text style={styles.currency}>{currency ? currency.id : "usd"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
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
  currency: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.amountText,
    color: Color.amountText,
    textTransform: "uppercase",
  },
  input: {
    flex: 1,
  },
});
