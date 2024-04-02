export interface CurrencyConversionInterface {
    USDBRL: {
      code: string;
      name: string;
      high: string;
      low: string;
      varBid: string;
      pctChange: string;
      bid: string;
      ask: string;
      timestamp: string;
      create_date: string;
    };
  }

export const fetchExchangeRate = async () =>{
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const conversion: CurrencyConversionInterface = await response.json()
    return conversion
}
