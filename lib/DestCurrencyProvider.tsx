import { createContext, PropsWithChildren, useState } from "react";

export const DestCurrencyContext = createContext("");
export const SetDestCurrencyContext = createContext((currencyID: string) => {});

export default function DestCurrencyProvider({ children }: PropsWithChildren) {
  const [currencyID, setCurrencyID] = useState("btc");

  return (
    <DestCurrencyContext value={currencyID}>
      <SetDestCurrencyContext value={setCurrencyID}>
        {children}
      </SetDestCurrencyContext>
    </DestCurrencyContext>
  );
}
