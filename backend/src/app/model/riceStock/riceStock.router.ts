import { Router } from 'express';
import { riceCategoryControler } from '../riceCategory/riceCategory.controler';
import { riceStockControler } from './ricesStock.contoler';

const router = Router();
router.post('/create-rice-stock', riceStockControler.createRiceStock);

export const riceStockRouter = router;
