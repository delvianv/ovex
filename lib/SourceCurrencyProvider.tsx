import { createContext, PropsWithChildren, useState } from "react";

export const SourceCurrencyContext = createContext("");
export const SetSourceCurrencyContext = createContext(
  (currencyID: string) => {},
);

export default function SourceCurrencyProvider({
  children,
}: PropsWithChildren) {
  const [currencyID, setCurrencyID] = useState("usd");

  return (
    <SourceCurrencyContext value={currencyID}>
      <SetSourceCurrencyContext value={setCurrencyID}>
        {children}
      </SetSourceCurrencyContext>
    </SourceCurrencyContext>
  );
}
