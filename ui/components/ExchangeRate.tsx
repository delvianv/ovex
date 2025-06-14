import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { getRate } from "@/lib/currency";
import { Quote } from "@/lib/types";

interface ExchangeProps {
  sourceCurrencyID: string;
  destCurrencyID: string;
  quote: Quote;
}

export default function ExchangeRate({
  sourceCurrencyID,
  destCurrencyID,
  quote,
}: ExchangeProps) {
  return (
    <Text style={styles.text}>
      1 {sourceCurrencyID} = {getRate(quote)} {destCurrencyID}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.label,
    color: colors.label,
    textTransform: "uppercase",
  },
});
