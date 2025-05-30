import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ItemSchema } from 'src/items/items.entity';
import { Invoice } from './invoice.dto';
import { UserSchema } from 'src/user-login/user-login.entity';
import { CartSchema } from 'src/cart/cart.entity';

export const InvoiceSchema: Schema = new mongoose.Schema({
  cart: { type: CartSchema, required: true },
  user: { type: UserSchema, required: true },
  items: { type: [ItemSchema], required: true },
  totalNet: { type: Number, required: true },
  totalGross: { type: Number, required: true },
  taxRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  invoiceNumber: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'cancelled'],
    default: 'pending',
  },
  currency: {
    type: String,
    enum: ['EUR', 'USD', 'GBP'],
    default: 'EUR',
  },
  paid: { type: Boolean, default: false },
  paidAt: { type: Date },
  notes: { type: String },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<Invoice>('Invoice', InvoiceSchema);
