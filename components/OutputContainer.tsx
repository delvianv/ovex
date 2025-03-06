import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import CurrencyConversion from "./CurrencyConversion";
import ExchangeRate from "./ExchangeRate";
import { API } from "../constants/API";
import { SourceAmount, SetDestinationAmount } from "../contexts/AmountContext";
import { MarketContext } from "../contexts/MarketContext";

import {
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

interface Quote {
  to_amount: string;
  rate: string;
  rate_is_from_currency: boolean;
}

export default function OutputContainer() {
  const markets = useContext(MarketContext);
  const sourceCurrency = useContext(SourceCurrency);
  const destinationCurrency = useContext(DestinationCurrency);
  const sourceAmount = useContext(SourceAmount);
  const setDestinationAmount = useContext(SetDestinationAmount);

  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchQuote = async () => {
      const market = markets.find(
        (market) =>
          market.id.includes(sourceCurrency) &&
          market.id.includes(destinationCurrency)
      );

      if (!market) return;

      const api =
        market.quote_currency === sourceCurrency
          ? `${API.RFQ}?market=${market.id}&from_amount=${sourceAmount}`
          : `${API.RFQ}?market=${market.id}&from_amount=${sourceAmount}&side=sell`;

      const response = await fetch(api);
      const data: Quote = await response.json();

      setDestinationAmount(parseFloat(data.to_amount));

      setExchangeRate(
        data.rate_is_from_currency
          ? 1 / parseFloat(data.rate)
          : parseFloat(data.rate)
      );
    };

    fetchQuote();
  }, [sourceCurrency, destinationCurrency, sourceAmount]);

  return (
    <View style={styles.container}>
      <CurrencyConversion />
      <ExchangeRate rate={exchangeRate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
