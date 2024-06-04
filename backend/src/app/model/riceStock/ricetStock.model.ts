import { Schema, model } from 'mongoose';
import { TRiceStock } from './riceStock.interface';

const riceStockSchema = new Schema<TRiceStock>(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'RiceCategory',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: [true, 'date is requied'],
    },
    addQuantity: {
      type: Number,
    },
    reduceQuantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export const RiceStock = model<TRiceStock>('RiceStock', riceStockSchema);
