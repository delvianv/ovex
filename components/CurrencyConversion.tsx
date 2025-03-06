import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { SourceAmount, DestinationAmount } from "../contexts/AmountContext";
import { Currency } from "../contexts/CurrencyContext";

interface ConversionProps {
  sourceCurrency: Currency | undefined;
  destinationCurrency: Currency | undefined;
}

export default function CurrencyConversion({
  sourceCurrency,
  destinationCurrency,
}: ConversionProps) {
  const sourceAmount = useContext(SourceAmount);
  const destinationAmount = useContext(DestinationAmount);

  return (
    <View style={styles.container}>
      <Text style={styles.sourceOutput}>
        {sourceCurrency &&
          `${sourceCurrency.symbol}${sourceAmount.toFixed(
            sourceCurrency.display_precision
          )} ${sourceCurrency.name} =`}
      </Text>
      <Text style={styles.destinationOutput}>
        {destinationCurrency &&
          `${destinationAmount.toFixed(
            destinationCurrency.display_precision
          )} ${destinationCurrency.name}`}
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
