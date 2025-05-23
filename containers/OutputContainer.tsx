import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

export default function OutputContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sourceCurrency}>$0 US Dollars =</Text>
        <Text style={styles.destinationCurrency}>0 Bitcoin</Text>
      </View>
      <View style={styles.section}>
        <Text>1 USD = 1 BTC</Text>
        <Text>1 BTC = 1 USD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  section: {
    gap: 8,
  },
  sourceCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.label,
    color: colors.text,
  },
  destinationCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.text,
    color: colors.text,
  },
});
