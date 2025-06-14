import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { DestCurrencyContext } from "@/lib/DestCurrencyProvider";
import { SourceAmountContext } from "@/lib/SourceAmountProvider";
import { SourceCurrencyContext } from "@/lib/SourceCurrencyProvider";
import CurrencyOutput from "../components/CurrencyOutput";
import ExchangeRate from "../components/ExchangeRate";

export default function OutputContainer() {
  const sourceCurrencyID = useContext(SourceCurrencyContext);
  const destCurrencyID = useContext(DestCurrencyContext);
  const sourceAmount = useContext(SourceAmountContext);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <CurrencyOutput
          currencyID={sourceCurrencyID}
          amount={sourceAmount}
          style={styles.sourceCurrency}
        />
        <CurrencyOutput
          currencyID={destCurrencyID}
          amount={0}
          style={styles.destCurrency}
        />
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
