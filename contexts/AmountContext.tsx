import { PropsWithChildren, createContext, useState } from "react";

export const AmountContext = createContext(0);
export const SetAmountContext = createContext((amount: number) => {});

export function AmountProvider({ children }: PropsWithChildren) {
  const [amount, setAmount] = useState(0);

  return (
    <AmountContext.Provider value={amount}>
      <SetAmountContext.Provider value={setAmount}>
        {children}
      </SetAmountContext.Provider>
    </AmountContext.Provider>
  );
}
