import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Item } from 'src/items/items.dto';
import { User } from 'src/user-login/user-login.entity';
import { Invoice } from 'src/invoice/invoice.dto';

export class Inventory {
  @ApiProperty({ example: '60d21b4667d0d8992e610c85' })
  @IsMongoId()
  _id: string;

  @ApiProperty({ type: [Item] })
  @IsArray()
  description: 'Der Artikel im Lager'
  @Type(() => Item)
  item: Item;

  @ApiProperty({
    description: 'Name des Lagers',
  })
  storageName: string;

  @ApiProperty({
    description: 'Aktuelle Menge im Lager',
  })
  quantity: number;

  @ApiProperty({
  description: 'Minimal erlaubte Menge im Lager, bevor bestellt werden muss',
  })
  minQuantity: number;

    @ApiProperty({
    description: 'Maximal erlaubte Menge im Lager, die im Lager liegen darf',
  })
  maxQuantity: number;


  @ApiProperty({
    example: '2024-06-01T12:00:00.000Z',
    description: 'Erstellungsdatum der Bestellung',
  })
  @IsDateString()
  createdAt: string;

  @ApiPropertyOptional({
    example: '2024-06-02T12:00:00.000Z',
    description: 'Letztes Änderungsdatum der Bestellung',
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;

  @ApiPropertyOptional({ example: 'Ware ist leicht brüchig' })
  @IsOptional()
  @IsString()
  notes?: string;
}
