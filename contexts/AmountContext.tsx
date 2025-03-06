import { PropsWithChildren, createContext, useState } from "react";

export const SourceAmount = createContext(0);
export const SetSourceAmount = createContext((amount: number) => {});

export const DestinationAmount = createContext(0);
export const SetDestinationAmount = createContext((amount: number) => {});

export function AmountProvider({ children }: PropsWithChildren) {
  const [sourceAmount, setSourceAmount] = useState(0);
  const [destinationAmount, setDestinationAmount] = useState(0);

  return (
    <SourceAmount.Provider value={sourceAmount}>
      <SetSourceAmount.Provider value={setSourceAmount}>
        <DestinationAmount.Provider value={destinationAmount}>
          <SetDestinationAmount.Provider value={setDestinationAmount}>
            {children}
          </SetDestinationAmount.Provider>
        </DestinationAmount.Provider>
      </SetSourceAmount.Provider>
    </SourceAmount.Provider>
  );
}
