import { createContext, PropsWithChildren, useState } from "react";

import DestCurrencyProvider from "./DestCurrencyProvider";
import SourceCurrencyProvider from "./SourceCurrencyProvider";
import { Currency } from "./types";

export const CurrencyContext = createContext<Currency[]>([]);
export const SetCurrencyContext = createContext((currencies: Currency[]) => {});

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
