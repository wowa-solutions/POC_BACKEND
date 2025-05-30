import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { ItemSchema } from 'src/items/items.entity';
import { PurchaseOrder } from './purchase-order.dto';
import { User, UserSchema } from 'src/user-login/user-login.entity';
import { InvoiceSchema } from 'src/invoice/invoice.entity';

export const PurchaseOrderSchema: Schema = new mongoose.Schema({
  invoice: { type: InvoiceSchema, required: true },
  user: { type: UserSchema, required: true },
  items: { type: [ItemSchema], required: true },
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'cancelled'],
    default: 'pending',
    required: true,
  },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'bank_transfer', 'cash'],
    required: true,
  },
  notes: { type: String },
});

export default mongoose.model<PurchaseOrder>(
  'PurchaseOrder',
  PurchaseOrderSchema,
);
