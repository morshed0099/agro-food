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
router.get('/', customerContoler.getAllcustomer);
router.get('/phonenumber', customerContoler.getSingleCustomer);

export const customerRouter = router;
