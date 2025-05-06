import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator';
import { Item } from 'src/items/items.dto'; // Stellen Sie sicher, dass der Pfad korrekt ist

export class Invoice {
  @ApiProperty({ example: 'INV-12345', description: 'Die eindeutige Rechnungs-ID' })
  @IsString()
  invoiceId: string;

  @ApiProperty({ example: '603d2149f1e5c7b9b0e2f7d2', description: 'Die Benutzer-ID, die diese Rechnung besitzt' })
  @IsMongoId()
  userId: string;

  @ApiProperty({ example: 'cart123', description: 'Die Warenkorb-ID, aus der diese Rechnung erstellt wurde' })
  @IsString()
  cartId: string;

  @ApiProperty({ type: [Item], description: 'Die Artikel, die in der Rechnung enthalten sind' })
  @IsArray()
  items: Item[];

  @ApiProperty({ example: 200.50, description: 'Der Gesamtbetrag der Rechnung' })
  @IsNumber()
  totalAmount: number;

  @ApiProperty({ example: '2024-12-27T12:00:00Z', description: 'Das Erstellungsdatum der Rechnung' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: '2024-12-27T12:00:00Z', description: 'Das Datum der letzten Aktualisierung der Rechnung' })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ example: 'pending', description: 'Der Status der Rechnung', enum: ['pending', 'paid', 'cancelled'] })
  @IsEnum(['pending', 'paid', 'cancelled'])
  status: 'pending' | 'paid' | 'cancelled';
}
