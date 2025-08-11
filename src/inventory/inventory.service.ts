import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Inventory } from './inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel('Inventory')
    private readonly InventoryModel: Model<Inventory>,
  ) {}

  async createInventory(
    purchaseOrder: Inventory,
  ): Promise<Inventory> {
    const newInventory = new this.InventoryModel(purchaseOrder);
    return newInventory.save();
  }

  async getAllInventorys(): Promise<Inventory[]> {
    return this.InventoryModel.find().exec();
  }

  async getInventoryById(id: string): Promise<Inventory> {
    return this.InventoryModel.findById(id).exec();
  }

  async deleteInventory(id: string): Promise<Inventory> {
    return this.InventoryModel.findByIdAndDelete(id).exec();
  }

  async updateInventory(
    id: string,
    updateData: Partial<Inventory>,
  ): Promise<Inventory> {

    console.log('Try to update Inventory by id:', id, 'with data:', updateData);
    return this.InventoryModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }
}
