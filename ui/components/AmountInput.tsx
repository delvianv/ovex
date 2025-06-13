import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { CurrencyContext } from "@/lib/CurrencyProvider";
import { SourceCurrencyContext } from "@/lib/SourceCurrencyProvider";
import InputContainer from "../containers/InputContainer";
import InputLabel from "./InputLabel";

export default function AmountInput() {
  const currencies = useContext(CurrencyContext);
  const currencyID = useContext(SourceCurrencyContext);
  const currency = currencies.find((currency) => currency.id === currencyID);

  const [amount, setAmount] = useState("0");

  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      {currency && (
        <InputContainer>
          <Text style={styles.text}>{currency.symbol}</Text>
          <TextInput
            value={amount}
            onChangeText={(text) => setAmount(text)}
            inputMode="numeric"
            style={[styles.text, { flex: 1 }]}
          />
          <Text style={[styles.text, { textTransform: "uppercase" }]}>
            {currency.id}
          </Text>
        </InputContainer>
      )}
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
