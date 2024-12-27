import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemSchema } from './items.entity';
import { Item } from './items.dto';
import { ApiTags, ApiOperation, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';

@ApiTags('Items') // Gruppen von Endpunkten in Swagger unter "Items"
@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Erstellt ein neues Item' })
  @ApiBody({ type: Item, description: 'Die Daten des neuen Items' })
  async createItem(@Body() itemData: Item): Promise<Item> {
    return this.itemService.createItem(itemData);
  }

  @Post('itemlist')
  async createItems(@Body() itemList: Item[]): Promise<boolean> {
    itemList.forEach(element => {
      console.log(element)
      this.itemService.createItem(element)
    });

    return true
  }

  @Get()
  @ApiOperation({ summary: 'Holt alle Items' })
  async getAllItems(): Promise<Item[]> {
    console.log('Request to get all Items...');
    return this.itemService.getAllItems();
  }

  @Get('single')
  @ApiOperation({ summary: 'Holt ein Item basierend auf der ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Items, das abgerufen werden soll',
  })
  async getItem(@Query('id') id: string): Promise<Item> {
    console.log('Request to get Item by Id...');
    return this.itemService.getItemById(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Löscht ein Item anhand der ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Items, das gelöscht werden soll',
  })
  async deleteItem(@Param('id') id: string): Promise<Item> {
    console.log('Request to delete Item by id: ', id, ' ...');
    return this.itemService.deleteItem(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Aktualisiert ein Item anhand der ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Items, das aktualisiert werden soll',
  })
  @ApiBody({
    type: Item,
    description: 'Die Daten, die aktualisiert werden sollen. Felder, die nicht angegeben werden, bleiben unverändert.',
  })
  async updateItem(
    @Param('id') id: string,
    @Body() updateData: Partial<Item>,
  ): Promise<Item> {
    console.log('Request to update Item by id: ', id, ' ...');
    return this.itemService.updateItem(id, updateData);
  }
}
