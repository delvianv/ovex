import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import {
  DestCurrencyContext,
  SetDestCurrencyContext,
  SetSourceCurrencyContext,
  SourceCurrencyContext,
} from "@/lib/CurrencyProvider";
import { MarketContext } from "@/lib/MarketProvider";
import { getDestCurrencies, getSourceCurrencies } from "@/lib/currency";
import CurrencyInput from "../components/CurrencyInput";

export default function CurrencyInputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);
  const setSourceCurrency = useContext(SetSourceCurrencyContext);
  const setDestCurrency = useContext(SetDestCurrencyContext);
  const markets = useContext(MarketContext);
  const sourceCurrencies = getSourceCurrencies(markets);
  const destCurrencies = getDestCurrencies(markets, sourceCurrencyID);

  useEffect(() => {
    if (!destCurrencies.includes(destCurrencyID)) {
      setDestCurrency(destCurrencies[0]);
    }
  }, [destCurrencies, destCurrencyID, setDestCurrency, sourceCurrencyID]);

  return (
    <View style={styles.container}>
      <CurrencyInput
        label="SOURCE CURRENCY"
        currencyID={sourceCurrencyID}
        markets={sourceCurrencies}
        setCurrency={setSourceCurrency}
      />
      <CurrencyInput
        label="DESTINATION CURRENCY"
        currencyID={destCurrencyID}
        markets={destCurrencies}
        setCurrency={setDestCurrency}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
});
