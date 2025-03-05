import { PropsWithChildren, createContext, useState } from "react";

export const TabContext = createContext("Crypto");
export const SetTabContext = createContext((tab: string) => {});

export function TabProvider({ children }: PropsWithChildren) {
  const [activeTab, setActiveTab] = useState("Crypto");

  return (
    <TabContext.Provider value={activeTab}>
      <SetTabContext.Provider value={setActiveTab}>
        {children}
      </SetTabContext.Provider>
    </TabContext.Provider>
  );
}
