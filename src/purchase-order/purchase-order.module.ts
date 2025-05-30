import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrderSchema } from './purchase-order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PurchaseOrder', schema: PurchaseOrderSchema }]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseOrderService],
})
export class PurchaseOrderModule {}
