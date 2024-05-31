import { Router } from 'express';
import { dailyCostControler } from '../dailyCost/dailyCost.controler';
import { valodate } from '../../midleware/validate';
import { dailyEarnValidation } from './dailyEarn.validation';
import { dailyEarnControler } from './dailyEarn.controler';

const router = Router();

router.post(
  '/create-earn',
  valodate(dailyEarnValidation.createDailyEarnValidation),
  dailyEarnControler.createDailyEarn,
);

export const dailyEarnRouter = router;
