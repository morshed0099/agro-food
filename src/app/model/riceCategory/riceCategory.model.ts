import { Schema, model } from 'mongoose';
import { TRiceCategory } from './riceCategory.interface';

const riceCategorySchema = new Schema<TRiceCategory>({
  name: {
    type: String,
    unique: true,
  },
},{
  timestamps:true
});
export const RiceCategory = model<TRiceCategory>(
  'RiceCategory',
  riceCategorySchema,
);
