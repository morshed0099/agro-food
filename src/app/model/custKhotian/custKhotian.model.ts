import { Schema, model } from 'mongoose';
import { TCustKhotian } from './custKhotian.interface';

const custKhotianSchema = new Schema<TCustKhotian>({
  credit: {
    type: Number,
    default: 0,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
  },
  date: {
    type: String,
    required: [true, 'date is requied !!'],
  },
  debit: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: [true, 'total amount is requied !!'],
  },
},{
  timestamps:true
});

export const CustKhotian = model<TCustKhotian>(
  'CustKhotian',
  custKhotianSchema,
);
