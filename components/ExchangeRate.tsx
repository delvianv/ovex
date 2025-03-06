import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function ExchangeRate() {
  return (
    <View style={styles.container}>
      <Text style={styles.exchangeRate}>1 USD = 1 BTC</Text>
      <Text style={styles.exchangeRate}>1 BTC = 1 USD</Text>
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
  },
});
