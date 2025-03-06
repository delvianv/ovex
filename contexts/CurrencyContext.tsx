import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../constants/API";

export interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
}

export const CurrencyContext = createContext<Currency[]>([]);
export const SetCurrencyContext = createContext((currencies: Currency[]) => {});

export function CurrencyProvider({ children }: PropsWithChildren) {
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
    <CurrencyContext.Provider value={currencies}>
      <SetCurrencyContext.Provider value={setCurrencies}>
        {children}
      </SetCurrencyContext.Provider>
    </CurrencyContext.Provider>
  );
}
