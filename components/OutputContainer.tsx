import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import CurrencyConversion from "./CurrencyConversion";
import ExchangeRate from "./ExchangeRate";
import { API } from "../constants/API";
import { SourceAmount, SetDestinationAmount } from "../contexts/AmountContext";
import { MarketContext } from "../contexts/MarketContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

interface Quote {
  to_amount: string;
  rate: string;
  rate_is_from_currency: boolean;
}

export default function OutputContainer() {
  const currencies = useContext(CurrencyContext);
  const markets = useContext(MarketContext);
  const sourceCurrencyID = useContext(SourceCurrency);
  const destinationCurrencyID = useContext(DestinationCurrency);
  const sourceAmount = useContext(SourceAmount);
  const setDestinationAmount = useContext(SetDestinationAmount);

  const [sourceCurrency, setSourceCurrency] = useState<Currency>();
  const [destinationCurrency, setDestinationCurrency] = useState<Currency>();
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchQuote = async () => {
      const market = markets.find(
        (market) =>
          market.id.includes(sourceCurrencyID) &&
          market.id.includes(destinationCurrencyID)
      );

      if (!market) return;

      const api =
        market.quote_currency === sourceCurrencyID
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

    setSourceCurrency(
      currencies.find((currency) => currency.id === sourceCurrencyID)
    );

    setDestinationCurrency(
      currencies.find((currency) => currency.id === destinationCurrencyID)
    );
  }, [sourceCurrencyID, destinationCurrencyID, sourceAmount]);

  return (
    <View style={styles.container}>
      <CurrencyConversion
        sourceCurrency={sourceCurrency}
        destinationCurrency={destinationCurrency}
      />
      <ExchangeRate
        sourceCurrency={sourceCurrency}
        destinationCurrency={destinationCurrency}
        rate={exchangeRate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
