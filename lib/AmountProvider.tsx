import { createContext, PropsWithChildren, useState } from "react";

export const SourceAmountContext = createContext(0);
export const SetSourceAmountContext = createContext((amount: number) => {});

export const DestAmountContext = createContext(0);
export const SetDestAmountContext = createContext((amount: number) => {});

export function SourceAmountProvider({ children }: PropsWithChildren) {
  const [amount, setAmount] = useState(1);

  return (
    <SourceAmountContext value={amount}>
      <SetSourceAmountContext value={setAmount}>
        {children}
      </SetSourceAmountContext>
    </SourceAmountContext>
  );
}

export function DestAmountProvider({ children }: PropsWithChildren) {
  const [amount, setAmount] = useState(0);

  return (
    <DestAmountContext value={amount}>
      <SetDestAmountContext value={setAmount}>{children}</SetDestAmountContext>
    </DestAmountContext>
  );
}

export default function AmountProvider({ children }: PropsWithChildren) {
  return (
    <SourceAmountProvider>
      <DestAmountProvider>{children}</DestAmountProvider>
    </SourceAmountProvider>
  );
}
