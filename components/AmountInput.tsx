import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import InputLabel from "./InputLabel";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { SourceAmount, SetSourceAmount } from "../contexts/AmountContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

export default function AmountInput() {
  const amount = useContext(SourceAmount);
  const setAmount = useContext(SetSourceAmount);

  const currencies = useContext(CurrencyContext);
  const sourceCurrency = useContext(SourceCurrency);
  const destinationCurrency = useContext(DestinationCurrency);
  const [currency, setCurrency] = useState<Currency>();

  useEffect(() => {
    setCurrency(currencies.find((currency) => currency.id === sourceCurrency));
  }, [sourceCurrency]);

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
        <Text style={styles.amountInput}>
          {currency ? currency.symbol : "$"}
        </Text>
        <TextInput
          value={amount.toString()}
          onChangeText={handleChangeText}
          inputMode="numeric"
          editable={Boolean(destinationCurrency)}
          style={[styles.amountInput, { flex: 1 }]}
        />
        <Text style={styles.amountInput}>
          {sourceCurrency ? sourceCurrency : "USD"}
        </Text>
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
    textTransform: "uppercase",
  },
});
