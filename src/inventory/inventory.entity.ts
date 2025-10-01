import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Inventory } from './inventory.dto';

const AddressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  streetNumber: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  additionalAddress: { type: String, required: false },
});

const InventoryItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  quantity: { type: Number, required: true },
  minQuantity: { type: Number, required: true },
  maxQuantity: { type: Number, required: true },
});

export const InventorySchema: Schema = new mongoose.Schema({
  _id: { type: String, required: false },
  inventoryItems: { type: [InventoryItemSchema], required: true },
  storageName: { type: String, required: true },
  storageAddress: { type: AddressSchema },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
  notes: { type: String },
});

export default mongoose.model<Inventory>('Inventory', InventorySchema);
