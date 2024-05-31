import { Schema, model, now } from 'mongoose';
import { TDaytotal } from './dayTotal.interface';

const dayTotalSchema = new Schema<TDaytotal>(
  {
    amount: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const DayTotal = model<TDaytotal>('DayTotal', dayTotalSchema);
