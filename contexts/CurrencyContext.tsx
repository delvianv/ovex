import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../constants/API";

export interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
  symbol: string;
  display_precision: number;
}

export const CurrencyContext = createContext<Currency[]>([]);

export const SourceCurrency = createContext("");
export const SetSourceCurrency = createContext((id: string) => {});

export const DestinationCurrency = createContext("");
export const SetDestinationCurrency = createContext((id: string) => {});

export function CurrencyProvider({ children }: PropsWithChildren) {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [destinationCurrency, setDestinationCurrency] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(API.currencies);
      const data: Currency[] = await response.json();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

  const updateSourceCurrency = (currency: string) => {
    setSourceCurrency(currency);
    setDestinationCurrency("");
  };

  return (
    <CurrencyContext.Provider value={currencies}>
      <SourceCurrency.Provider value={sourceCurrency}>
        <SetSourceCurrency.Provider value={updateSourceCurrency}>
          <DestinationCurrency.Provider value={destinationCurrency}>
            <SetDestinationCurrency.Provider value={setDestinationCurrency}>
              {children}
            </SetDestinationCurrency.Provider>
          </DestinationCurrency.Provider>
        </SetSourceCurrency.Provider>
      </SourceCurrency.Provider>
    </CurrencyContext.Provider>
  );
}
