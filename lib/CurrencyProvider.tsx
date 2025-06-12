import { createContext, PropsWithChildren, useState } from "react";

import { CurrencyType } from "@/lib/types";

export const CurrencyContext = createContext<CurrencyType[]>([]);
export const SetCurrencyContext = createContext(
  (currency: CurrencyType[]) => {},
);

export default function CurrencyProvider({ children }: PropsWithChildren) {
  const [currency, setCurrency] = useState<CurrencyType[]>([]);

  return (
    <CurrencyContext value={currency}>
      <SetCurrencyContext value={setCurrency}>{children}</SetCurrencyContext>
    </CurrencyContext>
  );
}
