export interface ICURRENCY_API_RESPONSE{
    data:ICURRENCY_DATA[];
    message: string;
    statuscode: number
}

export interface ICURRENCY_DATA{
    currency_name: string;
    currency_base: string;
    createdAt: string;
    updatedAt: string;
    _id: string
}

export interface IEXCHANGE_RATE_RESPONSE{
    rates: ExchangeRates;
    base: string;
    date: string
}

export interface ExchangeRates {
    [property: string]: number;
  }
