import { Router } from 'express';
import { dailyCostControler } from '../dailyCost/dailyCost.controler';
import { dailyTotalControler } from './dayTotal.controler';

const router = Router();
router.post('/create-daily-total', dailyTotalControler.createDailyTotal);

export const dailyTotalRouter = router;
