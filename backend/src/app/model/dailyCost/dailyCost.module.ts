import { Schema, model } from 'mongoose';

const dailyCostSchema = new Schema<TDailyCost>({
  amount: {
    type: Number,
    required: [true, 'amount is requied !!'],
  },
  description: {
    type: String,
    required: [true, 'description is requied !!'],
  },
  date: {
    type: String,
    required: [true, 'daite is required !! '],
  },
},{
  timestamps:true
});

export const Dailycost = model<TDailyCost>('Dailycost', dailyCostSchema);
