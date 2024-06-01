import { Types } from 'mongoose';

export type TRiceStock = {
  categoryId: Types.ObjectId;
  quantity: number;
  addQuantity?:number
  reduceQuantity?:number
  date:string  
};
