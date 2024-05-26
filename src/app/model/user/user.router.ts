import { Router } from 'express';
import { userControler } from './user.controler';
import { valodate } from '../../midleware/validate';
import { userValidation } from './user.valodation';

const router = Router();

router.post(
  '/',
  valodate(userValidation.createUserValidation),
  userControler.createUser,
);


export const userRouter= router