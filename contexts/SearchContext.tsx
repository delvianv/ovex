import { PropsWithChildren, createContext, useState } from "react";

export const SearchContext = createContext("");
export const SetSearchContext = createContext((query: string) => {});

export function SearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={query}>
      <SetSearchContext.Provider value={setQuery}>
        {children}
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  );
}
