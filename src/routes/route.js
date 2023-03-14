import { Router } from 'express';
import { getCurrencySymbols, currencyConvert } from '../controllers/controller.js';

export const router = Router();

router.get("/", getCurrencySymbols);
router.get("/convert", currencyConvert);
