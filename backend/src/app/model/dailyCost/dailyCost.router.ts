import { Router } from 'express';
import { dailyCostControler } from './dailyCost.controler';
import { valodate } from '../../midleware/validate';
import { dailyCostValidation } from './dailyCost.validation';

const router = Router();
router.post(
  '/create-cost',
  valodate(dailyCostValidation.createDailyCostValidation),
  dailyCostControler.createDailyCost,
);

export const dailyCostRouter = router;
