import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './items.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item')
    private readonly itemsModel: Model<Item>,
  ) {}

  async createItem(itemData: Item): Promise<Item> {
    const newItem = new this.itemsModel(itemData);
    return newItem.save();
  }

  // async createItems(itemList: Item[]): Promise<Item[]> {
  //   itemList.forEach(element => {
  //     const newItem = new this.itemsModel(element);
  //     return newItem.save();
  //   });
  //   return itemList;
  // }

  async getAllItems(): Promise<Item[]> {
    return this.itemsModel.find().exec();
  }

  async getItemById(id: string): Promise<Item> {
    return this.itemsModel.findById(id).exec();
  }

  async deleteItem(id: string): Promise<Item> {
    return this.itemsModel.findByIdAndDelete(id).exec();
  }

  async updateItem(id: string, updateData: Partial<Item>): Promise<Item> {
    return this.itemsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }
}
