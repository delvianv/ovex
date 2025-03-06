import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { Currency } from "../contexts/CurrencyContext";

interface RateProps {
  sourceCurrency: Currency | undefined;
  destinationCurrency: Currency | undefined;
  rate: number;
}

export default function ExchangeRate({
  sourceCurrency,
  destinationCurrency,
  rate,
}: RateProps) {
  return (
    <View style={styles.container}>
      {sourceCurrency && destinationCurrency && (
        <Text style={styles.exchangeRate}>
          {`1 ${sourceCurrency.id} = ${rate.toFixed(
            destinationCurrency.display_precision
          )} ${destinationCurrency.id}`}
        </Text>
      )}
      {sourceCurrency && destinationCurrency && (
        <Text style={styles.exchangeRate}>
          {`1 ${destinationCurrency.id} = ${(1 / rate).toFixed(
            sourceCurrency.display_precision
          )} ${sourceCurrency.id}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  exchangeRate: {
    fontFamily: FontFamily.exchangeRate,
    fontSize: FontSize.exchangeRate,
    color: Color.exchangeRate,
    textTransform: "uppercase",
  },
});
