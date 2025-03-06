import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../constants/API";

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

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(API.currencies);
      const data: Currency[] = await response.json();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

  return (
    <CurrenciesContext.Provider value={currencies}>
      <SetCurrenciesContext.Provider value={setCurrencies}>
        {children}
      </SetCurrenciesContext.Provider>
    </CurrenciesContext.Provider>
  );
}
