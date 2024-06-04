import { Schema, model } from 'mongoose';
import { TDailyEarn } from './dailyEarn.interface';

const dailyEarnSchema = new Schema<TDailyEarn>({
  amount: {
    type: Number,
    required: [true, 'amount is requied'],
  },
  date: {
    type: String,
    required: [true, 'date is required'],
  },
  description: {
    type: String,
    required: [true, 'description is requied'],
  },
},{
  timestamps:true
});


export const DailyEarn = model<TDailyEarn>('DailyEarn', dailyEarnSchema);
