import { StyleSheet, View } from "react-native";

import AmountInput from "@/components/AmountInput";
import { colors } from "@/constants/Colors";
import CurrencyInputContainer from "./CurrencyInputContainer";
import OutputContainer from "./OutputContainer";

export default function Body() {
  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInputContainer />
      <OutputContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackground,
    marginTop: 24,
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 40,
    flex: 1,
  },
});
