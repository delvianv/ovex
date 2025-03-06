import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function CurrencyConversion() {
  return (
    <View style={styles.container}>
      <Text style={styles.sourceOutput}>$0 US Dollars</Text>
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
