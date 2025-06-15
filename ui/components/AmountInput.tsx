import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { SetSourceAmountContext } from "@/lib/AmountProvider";
import { CurrencyContext, SourceCurrencyContext } from "@/lib/CurrencyProvider";
import InputContainer from "../containers/InputContainer";
import InputLabel from "./InputLabel";

export default function AmountInput() {
  const currencies = useContext(CurrencyContext);
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const currency = currencies.find(
    (currency) => currency.id === sourceCurrencyID,
  );

  const [amount, setAmount] = useState("1");
  const setSourceAmount = useContext(SetSourceAmountContext);

  const handleEndEditing = () => {
    const amountNumber = parseFloat(amount);

    if (isNaN(amountNumber)) {
      setSourceAmount(1);
    } else {
      setSourceAmount(amountNumber);
    }
  };

  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE AMOUNT" />
      {currency && (
        <InputContainer>
          <Text style={styles.text}>{currency.symbol}</Text>
          <TextInput
            value={amount}
            onChangeText={(text) => setAmount(text)}
            onEndEditing={handleEndEditing}
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
