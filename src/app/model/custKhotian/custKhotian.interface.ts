import { Types } from 'mongoose';

export type TCustKhotian = {
  customerId: Types.ObjectId;
  date: string;
  debit?: number;
  credit?: number;
  total: number;
};
