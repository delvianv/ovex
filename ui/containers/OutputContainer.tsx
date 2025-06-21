import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { fetchQuote } from "@/lib/API";
import {
  DestAmountContext,
  SetDestAmountContext,
  SourceAmountContext,
} from "@/lib/AmountProvider";
import {
  DestCurrencyContext,
  SourceCurrencyContext,
} from "@/lib/CurrencyProvider";
import { MarketContext } from "@/lib/MarketProvider";
import { toFixedString } from "@/lib/currency";
import { Quote } from "@/lib/types";
import CurrencyOutput from "../components/CurrencyOutput";
import ExchangeRate from "../components/ExchangeRate";

export default function OutputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);
  const sourceAmount = useContext(SourceAmountContext);
  const destAmount = useContext(DestAmountContext);
  const setDestAmount = useContext(SetDestAmountContext);
  const markets = useContext(MarketContext);

  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const getQuote = async () => {
      try {
        const quote = await fetchQuote(
          markets,
          sourceCurrencyID,
          destCurrencyID,
          sourceAmount,
        );
        if (!quote) return;

        setDestAmount(parseFloat(quote.to_amount));
        setQuote(quote);
      } catch (err) {
        console.error(err);
      }
    };

    getQuote();
  }, [markets, sourceCurrencyID, destCurrencyID, sourceAmount, setDestAmount]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <CurrencyOutput
          currencyID={sourceCurrencyID}
          amount={toFixedString(
            markets,
            sourceCurrencyID,
            sourceAmount.toString(),
          )}
          style={styles.sourceCurrency}
        />
        <CurrencyOutput
          currencyID={destCurrencyID}
          amount={toFixedString(markets, destCurrencyID, destAmount.toString())}
          style={styles.destCurrency}
        />
      </View>
      {quote && (
        <ExchangeRate
          sourceCurrencyID={sourceCurrencyID}
          destCurrencyID={destCurrencyID}
          quote={quote}
        />
      )}
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
  sourceCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.sourceCurrency,
    color: colors.text,
  },
  destCurrency: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.destCurrency,
    color: colors.text,
  },
});
