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
import { CartService } from './cart.service';
import { ApiOperation, ApiQuery, ApiBody } from '@nestjs/swagger';
import { Cart } from './cart.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Erstellt einen neuen Warenkorb' })
  @ApiBody({ type: Cart, description: 'Die Daten des neuen Warenkorbs' })
  @Post()
  async create(@Body() cart: Cart): Promise<Cart> {
    console.log('Create new Cart...');
    return this.cartService.createCart(cart);
  }

  @ApiOperation({ summary: 'Gib alle Warenkörbe zurück' })
  @Get()
  async findAll(): Promise<Cart[]> {
    console.log('Try to get Carts...');
    return this.cartService.getAllCarts();
  }

  @ApiOperation({ summary: 'Gib einen einzelnen Warenkorb zurück' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Warenkorbs, der abgerufen werden soll',
  })
  @Get('single')
  async getCartById(@Query('id') id: string): Promise<Cart> {
    console.log('Try to get Cart by id:', id);
    return this.cartService.getCartById(id);
  }

  @ApiOperation({ summary: 'Lösche einen Warenkorb' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Warenkorbs, der gelöscht werden soll',
  })
  @Delete()
  async deleteCart(@Query('id') id: string): Promise<Cart> {
    console.log('Try to delete Cart by id:', id);
    return this.cartService.deleteCart(id);
  }

  @ApiOperation({ summary: 'Aktualisiere einen Warenkorb' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID des Warenkorbs, der aktualisiert werden soll',
  })
  @ApiBody({
    type: Cart,
    description: 'Die Daten, die für das Update des Warenkorbs verwendet werden.',
  })
  @Patch()
  async updateCart(
    @Query('id') id: string,
    @Body() updateData: Partial<Cart>,
  ): Promise<Cart> {
    console.log('Try to update Cart by id:', id, 'with data:', updateData);
    return this.cartService.updateCart(id, updateData);
  }
}
