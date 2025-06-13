import { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { CurrencyContext } from "@/lib/CurrencyProvider";

interface ExchangeProps {
  currencyID_1: string;
  currencyID_2: string;
}

export default function ExchangeRate({
  currencyID_1,
  currencyID_2,
}: ExchangeProps) {
  const currencies = useContext(CurrencyContext);
  const currency1 = currencies.find((currency) => currency.id === currencyID_1);
  const currency2 = currencies.find((currency) => currency.id === currencyID_2);

  return (
    <>
      {currency1 && currency2 && (
        <Text style={styles.text}>
          0 {currency1.id} = 0 {currency2.id}
        </Text>
      )}
    </>
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
