import { StyleSheet, Text } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { AmountProps } from "./OutputContainer";

export default function DestinationAmount({ amount, currency }: AmountProps) {
  return <Text style={styles.amount}>{`${amount ?? 0} ${currency.name}`}</Text>;
}

const styles = StyleSheet.create({
  amount: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.amountText,
    color: Color.destAmount,
  },
});
