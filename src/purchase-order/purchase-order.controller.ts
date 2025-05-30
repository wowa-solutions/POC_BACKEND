import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiBody, ApiParam } from '@nestjs/swagger';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrder } from './purchase-order.dto';

@Controller('purchaseOrder')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseOrderService) {}

  @ApiOperation({ summary: 'Erstelle eine neue Bestellung' })
  @ApiBody({ type: PurchaseOrder, description: 'Die Daten der neuen Bestellung' })
  @Post()
  async createPurchaseOrder(@Body() purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    console.log('Create new PurchaseOrder...');
    return this.purchaseService.createPurchaseOrder(purchaseOrder);
  }

  @ApiOperation({ summary: 'Finde alle Bestellungen' })
  @Get()
  async getAllPurchaseOrders(): Promise<PurchaseOrder[]> {
    console.log('Try to get PurchaseOrders...');
    return this.purchaseService.getAllPurchaseOrders();
  }

  @ApiOperation({ summary: 'Finde eine bestimmte Bestellung anhand der ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Bestellung, die abgerufen werden soll',
  })
  @Get('single')
  async getPurchaseOrderById(@Query('id') id: string): Promise<PurchaseOrder> {
    console.log('Try to get PurchaseOrder by id:', id);
    return this.purchaseService.getPurchaseOrderById(id);
  }

  @ApiOperation({ summary: 'Lösche eine Bestellung' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Bestellung, die gelöscht werden soll',
  })
  @Delete()
  async deletePurchaseOrder(@Query('id') id: string): Promise<PurchaseOrder> {
    console.log('Try to delete PurchaseOrder by id:', id);
    return this.purchaseService.deletePurchaseOrder(id);
  }

  @ApiOperation({ summary: 'Aktualisiere eine Bestellung' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Bestellung, die aktualisiert werden soll',
  })
  @ApiBody({
    type: PurchaseOrder,
    description: 'Die Daten, die aktualisiert werden sollen. Felder, die nicht angegeben sind, bleiben unverändert.',
  })
  @Patch()
  async updateInvoice(
    @Query('id') id: string,
    @Body() updateData: Partial<PurchaseOrder>,
  ): Promise<PurchaseOrder> {
    console.log('Try to update PurchaseOrder by id:', id, 'with data:', updateData);
    return this.purchaseService.updatePurchaseOrder(id, updateData);
  }
}
