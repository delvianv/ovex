import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../constants/API";

export interface Market {
  id: string;
  base_currency: string;
  quote_currency: string;
}

export const MarketContext = createContext<Market[]>([]);

export function MarketProvider({ children }: PropsWithChildren) {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      const response = await fetch(API.markets);
      const data = await response.json();
      setMarkets(data);
    };

    fetchMarkets();
  }, []);

  return (
    <MarketContext.Provider value={markets}>{children}</MarketContext.Provider>
  );
}
