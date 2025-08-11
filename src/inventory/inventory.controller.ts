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
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.dto';

@Controller('inventory')
export class PurchaseController {
  constructor(private readonly purchaseService: InventoryService) {}

  @ApiOperation({ summary: 'Erstelle einen neuen Lagerbestand' })
  @ApiBody({ type: Inventory, description: 'Die Daten der neuen Bestellung' })
  @Post()
  async createInventory(@Body() inventory: Inventory): Promise<Inventory> {
    console.log('Create new Inventory...');
    return this.purchaseService.createInventory(inventory);
  }

  @ApiOperation({ summary: 'Finde alle Lagerbestände' })
  @Get()
  async getAllInventorys(): Promise<Inventory[]> {
    console.log('Try to get Inventorys...');
    return this.purchaseService.getAllInventorys();
  }

  @ApiOperation({ summary: 'Finde einen bestimmten Lagerbestand anhand der ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Lagerbestand, der abgerufen werden soll',
  })
  @Get('single')
  async getInventoryById(@Query('id') id: string): Promise<Inventory> {
    console.log('Try to get Inventory by id:', id);
    return this.purchaseService.getInventoryById(id);
  }

  @ApiOperation({ summary: 'Lösche einen Lagerbestand' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Lagerbestand, der gelöscht werden soll',
  })
  @Delete()
  async deleteInventory(@Query('id') id: string): Promise<Inventory> {
    console.log('Try to delete Inventory by id:', id);
    return this.purchaseService.deleteInventory(id);
  }

  @ApiOperation({ summary: 'Aktualisiere einen Lagerbestand' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Lagerbestand, der aktualisiert werden soll',
  })
  @ApiBody({
    type: Inventory,
    description: 'Die Daten, die aktualisiert werden sollen. Felder, die nicht angegeben sind, bleiben unverändert.',
  })
  @Patch()
  async updateInventory(
    @Query('id') id: string,
    @Body() updateData: Partial<Inventory>,
  ): Promise<Inventory> {

    console.log("????", this.purchaseService.updateInventory(id, updateData))
    return this.purchaseService.updateInventory(id, updateData);
  }
}
