import { Router } from 'express';
import { userRouter } from '../model/user/user.router';
import { authRouter } from '../model/auth/auth.router';
import { dailyCostRouter } from '../model/dailyCost/dailyCost.router';
import { riceCategoryRouter } from '../model/riceCategory/riceCategory.router';
import { dailyEarnRouter } from '../model/dailyEarn/dailyEarn.router';
import { customerRouter } from '../model/customer/customer.router';
import { customerKhotianRouter } from '../model/custKhotian/custKhotian.router';
import { dailyTotalRouter } from '../model/dayTotal/dayTotal.router';
import { riceStockRouter } from '../model/riceStock/riceStock.router';

const router = Router();

const moduleRouter = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/dailycost',
    route: dailyCostRouter,
  },
  {
    path: '/ricecategory',
    route: riceCategoryRouter,
  },
  {
    path: '/dailyearn',
    route: dailyEarnRouter,
  },
  {
    path: '/customer',
    route: customerRouter,
  },
  {
    path: '/custkhotian',
    route: customerKhotianRouter,
  },
  {
    path: '/dailytotal',
    route: dailyTotalRouter,
  },
  {
    path: '/ricestock',
    route: riceStockRouter,
  },
];

moduleRouter.forEach((ele) => router.use(ele.path, ele.route));

export default router;
