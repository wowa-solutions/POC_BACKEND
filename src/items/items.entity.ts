import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { Item } from 'src/interfaces/items.interface';

// export enum DishType {
//   PIZZA = 'Pizza',
//   PASTA = 'Pasta',
//   DESSERT = 'Dessert',
//   SIDE_DISH = 'Side Dish',
//   SALAD = 'Salad',
//   SOUP = 'Soup',
//   SNACK = 'Snack',
//   BREAKFAST = 'Breakfast',
//   LUNCH = 'Lunch',
//   DINNER = 'Dinner',
//   CUSTOM = 'Custom',
//   BURGER = 'Burger',
// }

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
  // dishType: { type: String, enum: Object.values(DishType), required: true },
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
