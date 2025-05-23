import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async createCart(cart: Cart): Promise<Cart> {
    const newCart = new this.cartModel(cart);
    return newCart.save();
  }

  async getAllCarts(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async getCartById(id: string): Promise<Cart> {
    return this.cartModel.findById(id).exec();
  }

  async deleteCart(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id).exec();
  }

  async updateCart(id: string, updateData: Partial<Cart>): Promise<Cart> {
    return this.cartModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }
}
