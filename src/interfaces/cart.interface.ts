import { Document } from 'mongoose';
import { Item } from '../interfaces/items.interface';

export interface Cart extends Document {
  cartId: string;
  userId: string;
  items: Item[];
  status: 'open' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
