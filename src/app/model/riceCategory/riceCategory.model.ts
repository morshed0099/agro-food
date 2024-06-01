import { Schema, model } from 'mongoose';
import { TRiceCategory } from './riceCategory.interface';

const riceCategorySchema = new Schema<TRiceCategory>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'category name is required!!'],
    },
  },
  {
    timestamps: true,
  },
);
export const RiceCategory = model<TRiceCategory>(
  'RiceCategory',
  riceCategorySchema,
);
