import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { SourceAmount, DestinationAmount } from "../contexts/AmountContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

export default function CurrencyConversion() {
  const sourceCurrencyID = useContext(SourceCurrency);
  const destinationCurrencyID = useContext(DestinationCurrency);
  const currencies = useContext(CurrencyContext);
  const sourceAmount = useContext(SourceAmount);
  const destinationAmount = useContext(DestinationAmount);

  const [sourceCurrency, setSourceCurrency] = useState<Currency>();
  const [destinationCurrency, setDestinationCurrency] = useState<Currency>();

  useEffect(() => {
    setSourceCurrency(
      currencies.find((currency) => currency.id === sourceCurrencyID)
    );

    setDestinationCurrency(
      currencies.find((currency) => currency.id === destinationCurrencyID)
    );
  }, [sourceCurrencyID, destinationCurrencyID]);

  return (
    <View style={styles.container}>
      <Text style={styles.sourceOutput}>
        {sourceCurrency &&
          `${sourceCurrency.symbol}${sourceAmount} ${sourceCurrency.name} =`}
      </Text>
      <Text style={styles.destinationOutput}>
        {destinationCurrency &&
          `${destinationAmount} ${destinationCurrency.name}`}
      </Text>
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
