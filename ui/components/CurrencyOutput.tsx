import { useContext } from "react";
import { Text } from "react-native";
import { CurrencyContext } from "@/lib/CurrencyProvider";

interface OutputProps {
  currencyID: string;
  amount: number;
  style: object;
}

export default function CurrencyOutput({
  currencyID,
  amount,
  style,
}: OutputProps) {
  const currencies = useContext(CurrencyContext);
  const currency = currencies.find((currency) => currency.id === currencyID);

  return (
    <>
      {currency && (
        <Text style={style}>
          {currency.symbol}
          {amount} {currency.name}
        </Text>
      )}
    </>
  );
}
