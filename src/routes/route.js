import { Router } from 'express';
import { getCurrencySymbols, currencyConvert } from '../controllers/controller';

export const router = Router();

router.get("/", getCurrencySymbols);
router.get("/convert", currencyConvert);
