import { Router } from 'express';
import { valodate } from '../../midleware/validate';
import { riceCategoryValidation } from './riceCategory.validation';
import { riceCategoryControler } from './riceCategory.controler';

const router = Router();
router.post(
  '/create-category',
  valodate(riceCategoryValidation.createRiceCatergoryValidation),
  riceCategoryControler.createCategory,
);
router.get('/', riceCategoryControler.getAllCategory);

export const riceCategoryRouter = router;
