import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const VariantSchema = new Schema({
  id: { type: Number, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  itemProperties: { type: [String], required: true },
});

export const ItemSchema = new Schema({
  description: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  brand: { type: String, required: true },
  selectedVariant: { type: Number, required: true },
  hashTags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
});

export default mongoose.model('Item', ItemSchema);
