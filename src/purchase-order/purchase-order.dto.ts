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

export enum PurchaseOrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  CANCELLED = 'cancelled',
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
}

export class PurchaseOrder {
  @ApiProperty({ example: '60d21b4667d0d8992e610c85' })
  @IsMongoId()
  _id: string;

  @ApiProperty({ type: [Item] })
  @IsArray()
  @Type(() => Item)
  items: Item[];

  @ApiProperty({
    description: 'Gesamtes Objekt des Users, der die Bestellung aufgegeben hat',
  })
  user: User;

  @ApiProperty({
    description: 'Invoice Objekt, das dieser Bestellung zugeordnet ist',
  })
  invoice: Invoice;

  @ApiProperty({
    enum: PurchaseOrderStatus,
    description: 'Status der Bestellung',
  })
  @IsEnum(PurchaseOrderStatus)
  status: PurchaseOrderStatus;

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

  @ApiProperty({ enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional({ example: 'Bitte später liefern oder an Nachbarn' })
  @IsOptional()
  @IsString()
  notes?: string;
}
