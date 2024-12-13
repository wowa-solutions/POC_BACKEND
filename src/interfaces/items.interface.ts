import { Document } from 'mongoose';
// import { DishType } from '../items/items.entity';

export interface Item extends Document {
  incredience: string[];
  description: string;
  title: string;
  price: number;
  quantity: number;
  link: string;
  // dishType: DishType;
  inStock: boolean;
  brand: string;
  product: string;
  cart: number;
  selectedVariant: number;
  details: string[];
  variants: Variant[];
}
export interface Variant {
  id: number;
  color: string;
  image: string;
  quantity: number;
}