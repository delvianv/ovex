import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { fetchMarkets } from "@/lib/API";
import { DestCurrencyContext } from "@/lib/DestCurrencyProvider";
import { SourceCurrencyContext } from "@/lib/SourceCurrencyProvider";
import { Market } from "@/lib/types";
import CurrencyInput from "../components/CurrencyInput";

export default function CurrencyInputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);

  const [markets, setMarkets] = useState<Market[]>([]);

  const getSourceCurrencies = () => {
    const base_currencies = markets.map((market) => market.base_currency);
    const quote_currencies = markets.map((market) => market.quote_currency);

    return [...base_currencies, ...quote_currencies];
  };

  const getDestCurrencies = () => {
    const base_currencies = markets.map((market) =>
      market.quote_currency === sourceCurrencyID ? market.base_currency : "",
    );
    const quote_currencies = markets.map((market) =>
      market.base_currency === sourceCurrencyID ? market.quote_currency : "",
    );

    return [...base_currencies, ...quote_currencies];
  };

  useEffect(() => {
    const getMarkets = async () => {
      const data = await fetchMarkets();
      setMarkets(data);
    };

    getMarkets();
  }, []);

  return (
    <View style={styles.container}>
      <CurrencyInput
        label="SOURCE CURRENCY"
        currencyID={sourceCurrencyID}
        markets={getSourceCurrencies()}
      />
      <CurrencyInput
        label="DESTINATION CURRENCY"
        currencyID={destCurrencyID}
        markets={getDestCurrencies()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
});
