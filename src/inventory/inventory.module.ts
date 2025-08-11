import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { InventorySchema } from './inventory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }]),
  ],
  controllers: [PurchaseController],
  providers: [InventoryService],
})
export class InventoryModule {}
