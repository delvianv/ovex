import { Market, Quote } from "./types";

export function getSourceCurrencies(markets: Market[]) {
  const baseCurrencies = markets.map((market) => market.base_currency);
  const quoteCurrencies = markets.map((market) => market.quote_currency);

  return [...baseCurrencies, ...quoteCurrencies];
}

export function getDestCurrencies(markets: Market[], sourceCurrencyID: string) {
  const baseMarkets = markets.filter(
    (market) => market.quote_currency === sourceCurrencyID,
  );
  const baseCurrencies = baseMarkets.map((market) => market.base_currency);

  const quoteMarkets = markets.filter(
    (market) => market.base_currency === sourceCurrencyID,
  );
  const quoteCurrencies = quoteMarkets.map((market) => market.quote_currency);

  return [...baseCurrencies, ...quoteCurrencies];
}

export function getRate(quote: Quote) {
  return quote.rate_is_from_currency
    ? (1 / parseFloat(quote.rate)).toString()
    : quote.rate;
}

export function toFixedString(
  markets: Market[],
  currencyID: string,
  amount: string,
) {
  const market = markets.find((market) => market.id.includes(currencyID));
  if (!market) return "";

  let precision = 0;
  if (market.base_currency === currencyID) precision = market.base_precision;
  if (market.quote_currency === currencyID) precision = market.quote_precision;

  return parseFloat(amount).toFixed(precision);
}
