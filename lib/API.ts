import { CurrencyType } from "./types";

const currencies = "https://www.ovex.io/api/v2/currencies";

export async function fetchCurrencies() {
  const response = await fetch(currencies);
  const data: CurrencyType[] = await response.json();
  return data;
}
