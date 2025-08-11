import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ItemSchema } from 'src/items/items.entity';
import { Inventory } from './inventory.dto';
import { UserSchema } from 'src/user-login/user-login.entity';
import { InvoiceSchema } from 'src/invoice/invoice.entity';

export const InventorySchema: Schema = new mongoose.Schema({
  item: { type: ItemSchema, required: true },
  storageName: { type: String, required: true },
  quantity: { type: Number, required: true },
  minQuantity: { type: Number, required: true },
  maxQuantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
  notes: { type: String },
});

export default mongoose.model<Inventory>(
  'Inventory',
  InventorySchema,
);
