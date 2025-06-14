import { Currency, Market, Quote } from "./types";

const currencies = "https://www.ovex.io/api/v2/currencies";
const markets = "https://www.ovex.io/api/v2/markets";
const quote = "https://www.ovex.io/api/v2/rfq/get_quote";

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

export async function fetchQuote(
  markets: Market[],
  sourceCurrencyID: string,
  destCurrencyID: string,
  sourceAmount: number,
) {
  const market = markets.find(
    (market) =>
      market.id.includes(sourceCurrencyID) &&
      market.id.includes(destCurrencyID),
  );
  if (!market) return;

  let side = "buy";
  if (sourceCurrencyID === market.base_currency) side = "sell";

  const response = await fetch(
    `${quote}?market=${market.id}&side=${side}&from_amount=${sourceAmount}`,
  );
  const data: Quote = await response.json();
  return data;
}
