import { createContext, PropsWithChildren, useState } from "react";

import { Market } from "./types";

export const MarketContext = createContext<Market[]>([]);
export const SetMarketContext = createContext((markets: Market[]) => {});

export default function MarketProvider({ children }: PropsWithChildren) {
  const [markets, setMarkets] = useState<Market[]>([]);

  return (
    <MarketContext value={markets}>
      <SetMarketContext value={setMarkets}>{children}</SetMarketContext>
    </MarketContext>
  );
}
