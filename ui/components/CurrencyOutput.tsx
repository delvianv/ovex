import { useContext } from "react";
import { Text } from "react-native";
import { CurrencyContext } from "@/lib/CurrencyProvider";

interface OutputProps {
  currencyID: string;
  style: object;
}

export default function CurrencyOutput({ currencyID, style }: OutputProps) {
  const currencies = useContext(CurrencyContext);
  const currency = currencies.find((currency) => currency.id === currencyID);

  return (
    <>
      {currency && (
        <Text style={style}>
          {currency.symbol}0 {currency.name}
        </Text>
      )}
    </>
  );
}
