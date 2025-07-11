export interface Currency {
  id: string;
  name: string;
  symbol: string;
  type: string;
  icon_url: string;
}

export interface Market {
  id: string;
  base_currency: string;
  quote_currency: string;
  base_precision: number;
  quote_precision: number;
}

export interface Quote {
  to_amount: string;
  rate: string;
  rate_is_from_currency: boolean;
}
