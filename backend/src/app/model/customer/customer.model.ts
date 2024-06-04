import { Schema, model } from 'mongoose';

const customerSchema = new Schema<TCustomer>({
  address: {
    type: String,
    required: [true, 'customer address is required !!'],
  },
  name: {
    type: String,
    required: [true, 'customer name is requied !!'],
  },
  phoneNumber: {
    type: String,
    minlength: [11, 'phone number not will be less then 11 digit'],
    maxlength: [11, 'phone number not will gatherthen 11 digit'],
    required: [true, 'phone number is requied'],
    unique: true,
  },
},{
  timestamps:true
});

export const Customer = model<TCustomer>('Customer', customerSchema);
