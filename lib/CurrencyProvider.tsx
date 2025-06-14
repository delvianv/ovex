import { createContext, PropsWithChildren, useState } from "react";

import { Currency } from "./types";

export const CurrencyContext = createContext<Currency[]>([]);
export const SetCurrencyContext = createContext((currencies: Currency[]) => {});

export const SourceCurrencyContext = createContext("");
export const SetSourceCurrencyContext = createContext(
  (currencyID: string) => {},
);

export const DestCurrencyContext = createContext("");
export const SetDestCurrencyContext = createContext((currencyID: string) => {});

function SourceCurrencyProvider({ children }: PropsWithChildren) {
  const [currencyID, setCurrencyID] = useState("zar");

  return (
    <SourceCurrencyContext value={currencyID}>
      <SetSourceCurrencyContext value={setCurrencyID}>
        {children}
      </SetSourceCurrencyContext>
    </SourceCurrencyContext>
  );
}

function DestCurrencyProvider({ children }: PropsWithChildren) {
  const [currencyID, setCurrencyID] = useState("btc");

  return (
    <DestCurrencyContext value={currencyID}>
      <SetDestCurrencyContext value={setCurrencyID}>
        {children}
      </SetDestCurrencyContext>
    </DestCurrencyContext>
  );
}

export default function CurrencyProvider({ children }: PropsWithChildren) {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  return (
    <CurrencyContext value={currencies}>
      <SetCurrencyContext value={setCurrencies}>
        <SourceCurrencyProvider>
          <DestCurrencyProvider>{children}</DestCurrencyProvider>
        </SourceCurrencyProvider>
      </SetCurrencyContext>
    </CurrencyContext>
  );
}
