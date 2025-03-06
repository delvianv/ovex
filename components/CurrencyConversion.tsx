import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { AmountContext } from "../contexts/AmountContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
} from "../contexts/CurrencyContext";

export default function CurrencyConversion() {
  const sourceCurrency = useContext(SourceCurrency);
  const amount = useContext(AmountContext);
  const currencies = useContext(CurrencyContext);

  const [currency, setCurrency] = useState<Currency>();

  useEffect(() => {
    setCurrency(currencies.find((currency) => currency.id === sourceCurrency));
  }, [sourceCurrency]);

  return (
    <View style={styles.container}>
      <Text style={styles.sourceOutput}>
        {currency
          ? `${currency.symbol}${amount} ${currency.name}`
          : "$0 US Dollars"}{" "}
        =
      </Text>
      <Text style={styles.destinationOutput}>0 Bitcoin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  sourceOutput: {
    fontFamily: FontFamily.sourceOutput,
    fontSize: FontSize.sourceOutput,
    color: Color.sourceOutput,
  },
  destinationOutput: {
    fontFamily: FontFamily.destinationOutput,
    fontSize: FontSize.destinationOutput,
    color: Color.destinationOutput,
  },
});
