import { Market, Quote } from "./types";

export function getSourceCurrencies(markets: Market[]) {
  const base_currencies = markets.map((market) => market.base_currency);
  const quote_currencies = markets.map((market) => market.quote_currency);

  return [...base_currencies, ...quote_currencies];
}

export function getDestCurrencies(markets: Market[], sourceCurrencyID: string) {
  const base_currencies = markets.map((market) =>
    market.quote_currency === sourceCurrencyID ? market.base_currency : "",
  );

  const quote_currencies = markets.map((market) =>
    market.base_currency === sourceCurrencyID ? market.quote_currency : "",
  );

  return [...base_currencies, ...quote_currencies];
}

export function getRate(quote: Quote) {
  return quote.rate_is_from_currency ? 1 / parseFloat(quote.rate) : quote.rate;
}
