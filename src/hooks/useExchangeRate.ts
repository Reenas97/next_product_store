import { CurrencyConversionInterface, fetchExchangeRate } from "@/services/exchangeRater";
import { useState, useEffect } from "react";

export const useExchangeRate = () =>{
    const [exchangeRate, setExchangeRate] = useState<number>(0);

    useEffect(() => {
        const getExchangeRate = async () => {
            const conversionData: CurrencyConversionInterface = await fetchExchangeRate();
            const rateInBRL = parseFloat(conversionData['USDBRL'].ask)
            setExchangeRate(rateInBRL);
        };
        
        getExchangeRate();
    }, []); // O array vazio garante que o useEffect seja executado apenas uma vez após a montagem do componente

    return exchangeRate;
}

