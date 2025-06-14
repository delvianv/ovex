import { Currency, Market } from "./types";

const currencies = "https://www.ovex.io/api/v2/currencies";
const markets = "https://www.ovex.io/api/v2/markets";

export async function fetchCurrencies() {
  const response = await fetch(currencies);
  const data: Currency[] = await response.json();
  return data;
}

export async function fetchMarkets() {
  const response = await fetch(markets);
  const data: Market[] = await response.json();
  return data;
}
