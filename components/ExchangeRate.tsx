import { StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { Currency } from "../App";

interface ExchangeProps {
  amount: number;
  sourceCurrency: Currency;
  destCurrency: Currency;
}

export default function ExchangeRate({
  amount,
  sourceCurrency,
  destCurrency,
}: ExchangeProps) {
  const parseOutput = (
    amount: number,
    sourceCurrency: Currency,
    destCurrency: Currency
  ) => {
    const source = sourceCurrency.id;
    const dest = destCurrency.id;

    let amountFormatted: number | string = 0;
    if (!isNaN(amount)) {
      amountFormatted = amount.toFixed(destCurrency.display_precision);
    }

    return `1 ${source} = ${amountFormatted} ${dest}`;
  };

  return (
    <Text style={styles.amount}>
      {parseOutput(amount, sourceCurrency, destCurrency)}
    </Text>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Color.currencyText,
    textTransform: "uppercase",
  },
});
