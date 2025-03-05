import { StyleSheet, View } from "react-native";

import CurrencyInputContainer from "./CurrencyInputContainer";
import SourceAmount from "./SourceAmount";
import { Color } from "../constants/Color";

export default function Body() {
  return (
    <View style={styles.container}>
      <SourceAmount />
      <CurrencyInputContainer label="SOURCE CURRENCY" />
      <CurrencyInputContainer label="DESTINATION CURRENCY" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.bodyBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    gap: 30,
    borderRadius: 7,
  },
});
