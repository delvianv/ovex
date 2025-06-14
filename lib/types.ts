export interface Currency {
  id: string;
  name: string;
  symbol: string;
  type: string;
  icon_url: string;
}

export interface Market {
  base_currency: string;
  quote_currency: string;
}
