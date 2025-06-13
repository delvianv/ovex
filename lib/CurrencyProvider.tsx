import { createContext, PropsWithChildren, useState } from "react";

import DestCurrencyProvider from "./DestCurrencyProvider";
import SourceCurrencyProvider from "./SourceCurrencyProvider";
import { CurrencyType } from "./types";

export const CurrencyContext = createContext<CurrencyType[]>([]);
export const SetCurrencyContext = createContext(
  (currency: CurrencyType[]) => {},
);

export default function CurrencyProvider({ children }: PropsWithChildren) {
  const [currency, setCurrency] = useState<CurrencyType[]>([]);

  return (
    <CurrencyContext value={currency}>
      <SetCurrencyContext value={setCurrency}>
        <SourceCurrencyProvider>
          <DestCurrencyProvider>{children}</DestCurrencyProvider>
        </SourceCurrencyProvider>
      </SetCurrencyContext>
    </CurrencyContext>
  );
}
