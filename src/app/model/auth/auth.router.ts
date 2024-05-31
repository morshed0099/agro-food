import { Router } from 'express';
import { authControler } from './auth.controler';
import { valodate } from '../../midleware/validate';
import { authValidation } from './auth.validation';

const router = Router();

router.post(
  '/login',
  valodate(authValidation.loginValidation),
  authControler.loginUser,
);

export const authRouter = router;
