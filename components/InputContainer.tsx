import { StyleSheet, View } from "react-native";

import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import { Color } from "../constants/Color";
import { Currency } from "../App";

interface ContainerProps {
  sourceCurrency: Currency | undefined;
  setSourceCurrency: (currency: Currency) => void;
  destCurrency: Currency | undefined;
  setDestCurrency: (currency: Currency) => void;
}

export default function InputContainer({
  sourceCurrency,
  setSourceCurrency,
  destCurrency,
  setDestCurrency,
}: ContainerProps) {
  return (
    <View style={styles.container}>
      <AmountInput />
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
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.inputContainerBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  currencyInput: {
    gap: 30,
  },
});
