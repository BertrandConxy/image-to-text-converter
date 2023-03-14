import { get } from 'axios';
import {data } from '../data/currency-symbols';

export const getCurrencySymbols = (req, res) => {
  res.render('index', {currencySymbols: data});
}

export const currencyConvert = async (req,res) => {
    const { fromCurrency, toCurrency, amount } = req.query;
    try {
        if(fromCurrency === null || fromCurrency === null || amount === null) {
            res.render('error')
        }
      const response = await get(`https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, {
        headers: {
          apikey: 'd0lA9Ngr81VqZKkHnDvdiLcjvnVcNApF',
        }
      });
      const result = response.data;
      res.render('result', { amount, fromCurrency, toCurrency, result });
    } catch (error) {
      console.error(error);
      res.render('error');
    }
}
