import { Router } from 'express';
import { valodate } from '../../midleware/validate';
import { customerValidation } from './customer.validation';
import { customerContoler } from './customer.controler';

const router = Router();
router.post(
  '/create-customer',
  valodate(customerValidation.createCustomerSchema),
  customerContoler.createCustomer,
);

export const customerRouter = router;
