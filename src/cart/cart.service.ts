import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async createCart(cart: Cart): Promise<Cart> {
    const newCart = new this.cartModel(cart);
    console.log('try to create cart... ', cart);
    return newCart.save();
  }

  async getAllCarts(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async getCartById(id: string): Promise<Cart> {
    console.log(this.cartModel.findById(id).exec());

    return this.cartModel.findById(id).exec();
  }

  async getCartByUserId(userId: string): Promise<Cart> {
    console.log(this.cartModel.findOne({ userId }).exec());

    return this.cartModel.findOne({ userId }).exec();
  }

  async deleteCart(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id).exec();
  }

  async updateCart(userId: string, updateData: Partial<Cart>): Promise<Cart> {
    // 🧼 _id entfernen, wenn leer oder unerwünscht
    if (updateData._id === '') {
      delete updateData._id;
    }

    return await this.cartModel.findOneAndUpdate(
      { userId: userId },
      updateData,
      { new: true },
    );
  }
}
