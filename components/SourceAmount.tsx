import { StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { AmountProps } from "./OutputContainer";

export default function SourceAmount({ amount, currency }: AmountProps) {
  return (
    <Text style={styles.amount}>
      {`${currency.symbol}${amount} ${currency.name} =`}
    </Text>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.default,
    color: Color.amountText,
  },
});
