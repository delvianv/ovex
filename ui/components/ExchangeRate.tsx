import { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { MarketContext } from "@/lib/MarketProvider";
import { getRate, toFixedString } from "@/lib/currency";
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
  const markets = useContext(MarketContext);

  return (
    <Text style={styles.text}>
      {`1 ${sourceCurrencyID} = ${toFixedString(markets, destCurrencyID, getRate(quote))} ${destCurrencyID}`}
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
