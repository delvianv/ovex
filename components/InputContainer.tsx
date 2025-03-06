import { StyleSheet, View } from "react-native";

import CurrencyInputContainer from "./CurrencyInputContainer";
import SourceInput from "./SourceInput";

export default function InputContainer() {
  return (
    <View style={styles.container}>
      <SourceInput />
      <CurrencyInputContainer label="SOURCE CURRENCY" />
      <CurrencyInputContainer label="DESTINATION CURRENCY" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
});
