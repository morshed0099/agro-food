import { Router } from 'express';
import { customerContoler } from '../customer/customer.controler';
import { customerKhotianControler } from './custKhotian.crontroler';

const router = Router();

router.post('/create-debit', customerKhotianControler.createDebit);
router.post('/create-credit', customerKhotianControler.createCradit);
router.get('/due-customer', customerKhotianControler.deuCustomer);

export const customerKhotianRouter = router;
