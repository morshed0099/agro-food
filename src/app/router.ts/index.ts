import { Router } from 'express';
import { userRouter } from '../model/user/user.router';

const router = Router();

const moduleRouter = [
  {
    path: '/user',
    route: userRouter,
  },
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));

export default router;
