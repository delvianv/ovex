import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import DestinationAmount from "./DestinationAmount";
import ExchangeRate from "./ExchangeRate";
import SourceAmount from "./SourceAmount";
import { API } from "../constants/API";
import { Currency } from "../App";

interface OutputProps {
  amount: number;
  sourceCurrency: Currency;
  destCurrency: Currency;
}

interface Quote {
  to_amount: string;
  rate: string;
}

export interface AmountProps {
  amount: number | string;
  currency: Currency;
}

export default function OutputContainer({
  amount,
  sourceCurrency,
  destCurrency,
}: OutputProps) {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        `${API.RFQ}&market=${sourceCurrency.id}${destCurrency.id}&from_amount=${amount}`
      );
      const data = await response.json();
      setQuote(data);
    };

    fetchQuote();
  }, [amount, sourceCurrency, destCurrency]);

  return (
    <>
      {quote && (
        <View style={styles.container}>
          <View style={styles.amounts}>
            <SourceAmount amount={amount} currency={sourceCurrency} />
            <DestinationAmount
              amount={quote.to_amount}
              currency={destCurrency}
            />
          </View>
          <View style={styles.exchangeRates}>
            <ExchangeRate
              amount={parseFloat(quote.rate)}
              sourceCurrency={sourceCurrency}
              destCurrency={destCurrency}
            />
            <ExchangeRate
              amount={1 / parseFloat(quote.rate)}
              sourceCurrency={destCurrency}
              destCurrency={sourceCurrency}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  amounts: {
    gap: 8,
  },
  exchangeRates: {
    gap: 4,
  },
});
