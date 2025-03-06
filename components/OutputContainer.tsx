import { StyleSheet, View } from "react-native";

import CurrencyConversion from "./CurrencyConversion";
import ExchangeRate from "./ExchangeRate";

export default function OutputContainer() {
  return (
    <View style={styles.container}>
      <CurrencyConversion />
      <ExchangeRate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
