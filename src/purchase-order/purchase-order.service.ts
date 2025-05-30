import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PurchaseOrder } from './purchase-order.dto';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @InjectModel('PurchaseOrder') private readonly PurchaseOrderModel: Model<PurchaseOrder>,
  ) {}

  async createPurchaseOrder(purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    const newPurchaseOrder = new this.PurchaseOrderModel(PurchaseOrder);
    return newPurchaseOrder.save();
  }

  async getAllPurchaseOrders(): Promise<PurchaseOrder[]> {
    return this.PurchaseOrderModel.find().exec();
  }

  async getPurchaseOrderById(id: string): Promise<PurchaseOrder> {
    return this.PurchaseOrderModel.findById(id).exec();
  }

  async deletePurchaseOrder(id: string): Promise<PurchaseOrder> {
    return this.PurchaseOrderModel.findByIdAndDelete(id).exec();
  }

  async updatePurchaseOrder(
    id: string,
    updateData: Partial<PurchaseOrder>,
  ): Promise<PurchaseOrder> {
    return this.PurchaseOrderModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }
}
