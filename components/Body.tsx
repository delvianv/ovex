import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";

export default function Body() {
  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackground,
    marginTop: 25,
    paddingVertical: 30,
    paddingHorizontal: 15,
    gap: 40,
  },
});
