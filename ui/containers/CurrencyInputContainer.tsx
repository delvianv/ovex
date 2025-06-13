import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { DestCurrencyContext } from "@/lib/DestCurrencyProvider";
import { SourceCurrencyContext } from "@/lib/SourceCurrencyProvider";
import CurrencyInput from "../components/CurrencyInput";

export default function CurrencyInputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);

  return (
    <View style={styles.container}>
      <CurrencyInput label="SOURCE CURRENCY" currencyID={sourceCurrencyID} />
      <CurrencyInput label="DESTINATION CURRENCY" currencyID={destCurrencyID} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
});
