import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesStore, setRatesData] = useState({
    state: "loading",
  });

  const API_KEY = "0I7ycz7XJlgfeOm9UvsPm3B0IakDb8CU";

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          `https://api.apilayer.com/currency_data/live?apikey=${API_KEY}&source=PLN&currencies=USD,EUR,JPY,CAD`
        );

        const { quotes, date } = await response.data;

        setRatesData({
          state: "success",
          rates: quotes,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getRates, 2500);
  }, []);

  return ratesStore;
};
