import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Address } from 'src/interfaces/user.interface';

export class InventoryItemDto {
  @ApiProperty({ example: '682cbd62ea54a88fd4eca2e9' })
  itemId: string;

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
}

export class Inventory {
  @ApiProperty({ example: '60d21b4667d0d8992e610c85' })
  @IsOptional()
  @IsMongoId()
  _id?: string;

  @ApiProperty({ type: [InventoryItemDto] })
  @IsArray()
  description: 'Der Artikel im Lagerort';
  @Type(() => InventoryItemDto)
  inventoryItems: InventoryItemDto;

  @ApiProperty({
    description: 'Name des Lagerorts',
  })
  storageName: string;

  @ApiProperty({
    description: 'Addresse des Lagerorts',
  })
  storageAddress: Address;

  @ApiProperty({
    example: '2024-06-01T12:00:00.000Z',
    description: 'Erstellungsdatum des Lagerorts',
  })
  @IsDateString()
  createdAt: string;

  @ApiPropertyOptional({
    example: '2024-06-02T12:00:00.000Z',
    description: 'Letztes Änderungsdatum des Lagerorts',
  })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;

  @ApiPropertyOptional({ example: 'Notizen zu diesem Lagerort' })
  @IsOptional()
  @IsString()
  notes?: string;
}
