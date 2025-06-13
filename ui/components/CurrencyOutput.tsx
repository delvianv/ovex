import { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { CurrencyContext } from "@/lib/CurrencyProvider";

interface OutputProps {
  currencyID: string;
  style: string;
}

export default function CurrencyOutput({ currencyID, style }: OutputProps) {
  const currencies = useContext(CurrencyContext);
  const currency = currencies.find((currency) => currency.id === currencyID);

  return (
    <>
      {currency && (
        <Text
          style={
            style === "source" ? styles.sourceCurrency : styles.destCurrency
          }
        >
          {currency.symbol}0 {currency.name}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  sourceCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.label,
    color: colors.text,
  },
  destCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.text,
    color: colors.text,
  },
});
