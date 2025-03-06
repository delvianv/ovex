import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

import {
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

interface RateProps {
  rate: number;
}

export default function ExchangeRate({ rate }: RateProps) {
  const sourceCurrency = useContext(SourceCurrency);
  const destinationCurrency = useContext(DestinationCurrency);

  return (
    <View style={styles.container}>
      <Text style={styles.exchangeRate}>
        {`1 ${sourceCurrency} = ${rate} ${destinationCurrency}`}
      </Text>
      <Text style={styles.exchangeRate}>
        {`1 ${destinationCurrency} = ${1 / rate} ${sourceCurrency}`}
      </Text>
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
