import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsMongoId,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CartItemDto {
  @ApiProperty({ example: '682cbd62ea54a88fd4eca2e9' })
  itemId: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: '2025-09-25T12:00:00Z' })
  @IsDate()
  addedAt: Date;
}

export class Cart {
  @ApiProperty({ example: '603d2149f1e5c7b9b0e2f7d2' })
  @IsMongoId()
  _id?: string;

  @ApiProperty({ example: '603d2149f1e5c7b9b0e2f7d2' })
  @IsMongoId()
  userId: string;

  @ApiProperty({ type: [CartItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  cartItems: CartItemDto[];

  @ApiProperty({ example: 'open', enum: ['open', 'completed', 'cancelled'] })
  @IsEnum(['open', 'completed', 'cancelled'])
  status: 'open' | 'completed' | 'cancelled';

  @ApiProperty({ example: '2025-09-25T12:00:00Z' })
  @IsDate()
  createdAt?: Date;

  @ApiProperty({ example: '2025-09-25T12:00:00Z' })
  @IsDate()
  updatedAt?: Date;
}
