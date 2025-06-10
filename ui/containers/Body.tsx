import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import AmountInput from "@/ui/components/AmountInput";
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
