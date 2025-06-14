import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fetchCurrencies, fetchMarkets } from "@/lib/API";
import { SetCurrencyContext } from "@/lib/CurrencyProvider";
import { SetMarketContext } from "@/lib/MarketProvider";
import AmountInput from "../components/AmountInput";
import CurrencyInputContainer from "./CurrencyInputContainer";
import OutputContainer from "./OutputContainer";

export default function Body() {
  const setCurrencies = useContext(SetCurrencyContext);
  const setMarkets = useContext(SetMarketContext);

  useEffect(() => {
    const getCurrencies = async () => {
      const data = await fetchCurrencies();
      setCurrencies(data);
    };

    const getMarkets = async () => {
      const data = await fetchMarkets();
      setMarkets(data);
    };

    getCurrencies();
    getMarkets();
  }, [setCurrencies, setMarkets]);

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
