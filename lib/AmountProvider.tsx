import { createContext, PropsWithChildren, useState } from "react";

export const SourceAmountContext = createContext(0);
export const SetSourceAmountContext = createContext((amount: number) => {});

export function SourceAmountProvider({ children }: PropsWithChildren) {
  const [amount, setAmount] = useState(0);

  return (
    <SourceAmountContext value={amount}>
      <SetSourceAmountContext value={setAmount}>
        {children}
      </SetSourceAmountContext>
    </SourceAmountContext>
  );
}
