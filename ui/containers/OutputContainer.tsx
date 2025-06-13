import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { DestCurrencyContext } from "@/lib/DestCurrencyProvider";
import { SourceCurrencyContext } from "@/lib/SourceCurrencyProvider";
import CurrencyOutput from "../components/CurrencyOutput";
import ExchangeRate from "../components/ExchangeRate";

export default function OutputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <CurrencyOutput currencyID={sourceCurrencyID} style="source" />
        <CurrencyOutput currencyID={destCurrencyID} style="dest" />
      </View>
      <View style={styles.section}>
        <ExchangeRate
          currencyID_1={sourceCurrencyID}
          currencyID_2={destCurrencyID}
        />
        <ExchangeRate
          currencyID_1={destCurrencyID}
          currencyID_2={sourceCurrencyID}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  section: {
    gap: 8,
  },
});
