import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import { Currency } from "../App";

interface ContainerProps {
  amount: number;
  setAmount: (amount: number) => void;
  sourceCurrency: Currency | undefined;
  setSourceCurrency: (currency: Currency) => void;
  destCurrency: Currency | undefined;
  setDestCurrency: (currency: Currency) => void;
}

export default function InputContainer({
  amount,
  setAmount,
  sourceCurrency,
  setSourceCurrency,
  destCurrency,
  setDestCurrency,
}: ContainerProps) {
  return (
    <>
      <AmountInput
        amount={amount}
        setAmount={setAmount}
        sourceCurrency={sourceCurrency}
        destCurrency={destCurrency}
      />
      <View style={styles.currencyInput}>
        <CurrencyInput
          label="SOURCE CURRENCY"
          text="Select a Source Currency"
          currency={sourceCurrency}
          setCurrency={setSourceCurrency}
        />
        {sourceCurrency && (
          <CurrencyInput
            label="DESTINATION CURRENCY"
            text="Select a Destination Currency"
            currency={destCurrency}
            setCurrency={setDestCurrency}
            sourceCurrency={sourceCurrency}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  currencyInput: {
    gap: 30,
  },
});
