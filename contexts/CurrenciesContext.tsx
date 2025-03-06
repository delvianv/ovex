import { PropsWithChildren, createContext, useState } from "react";

export interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
}

export const CurrenciesContext = createContext<Currency[]>([]);

export const SetCurrenciesContext = createContext(
  (currencies: Currency[]) => {}
);

export function CurrenciesProvider({ children }: PropsWithChildren) {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  return (
    <CurrenciesContext.Provider value={currencies}>
      <SetCurrenciesContext.Provider value={setCurrencies}>
        {children}
      </SetCurrenciesContext.Provider>
    </CurrenciesContext.Provider>
  );
}
