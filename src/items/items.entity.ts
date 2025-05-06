import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Item } from './items.dto';

export const ItemSchema = new Schema<Item>({
  incredience: { type: [String], required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  link: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  brand: { type: String, required: true },
  product: { type: String, required: true },
  cart: { type: Number, default: 0 },
  selectedVariant: { type: Number, default: 0 },
  details: { type: [String], required: true },
  variants: {
    type: [
      {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        priceModifier: { type: Number, required: true },
      },
    ],
    required: true,
  },
});

export default mongoose.model('Item', ItemSchema);
