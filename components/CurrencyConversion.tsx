import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { API } from "../constants/API";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { AmountContext } from "../contexts/AmountContext";
import { Market, MarketContext } from "../contexts/MarketContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

export default function CurrencyConversion() {
  const sourceCurrencyID = useContext(SourceCurrency);
  const destinationCurrencyID = useContext(DestinationCurrency);
  const amount = useContext(AmountContext);
  const currencies = useContext(CurrencyContext);
  const markets = useContext(MarketContext);

  const [sourceCurrency, setSourceCurrency] = useState<Currency>();
  const [destinationCurrency, setDestinationCurrency] = useState<Currency>();
  const [market, setMarket] = useState<Market>();
  const [quote, setQuote] = useState();

  useEffect(() => {
    if (sourceCurrencyID && destinationCurrencyID) {
      const market = markets.find(
        (market) =>
          market.id.includes(sourceCurrencyID) &&
          market.id.includes(destinationCurrencyID)
      );
      setMarket(market);
      console.log(market);
    }

    const fetchQuote = async () => {
      const response = await fetch(API.RFQ);
      const data = await response.json();
      setQuote(data);
    };

    setSourceCurrency(
      currencies.find((currency) => currency.id === sourceCurrencyID)
    );

    setDestinationCurrency(
      currencies.find((currency) => currency.id === destinationCurrencyID)
    );
  }, [sourceCurrencyID, destinationCurrencyID, amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.sourceOutput}>
        {sourceCurrency
          ? `${sourceCurrency.symbol}${amount} ${sourceCurrency.name} =`
          : "$0 US Dollars ="}
      </Text>
      <Text style={styles.destinationOutput}>
        {destinationCurrency ? `0 ${destinationCurrency.name}` : "0 Bitcoin"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  sourceOutput: {
    fontFamily: FontFamily.sourceOutput,
    fontSize: FontSize.sourceOutput,
    color: Color.sourceOutput,
  },
  destinationOutput: {
    fontFamily: FontFamily.destinationOutput,
    fontSize: FontSize.destinationOutput,
    color: Color.destinationOutput,
  },
});
