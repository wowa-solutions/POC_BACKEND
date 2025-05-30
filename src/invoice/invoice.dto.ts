import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsNumber,
  IsString,
} from 'class-validator';
import { Cart } from 'src/cart/cart.dto';
import { Item } from 'src/items/items.dto'; // Stellen Sie sicher, dass der Pfad korrekt ist
import { User } from 'src/user-login/user-login.entity';

export class Invoice {
  @ApiProperty({
    type: [Item],
    description: 'Die Artikel, die in der Rechnung enthalten sind',
  })
  @IsArray()
  items: Item[];

  @ApiProperty({
    example: 'cart123',
    description: 'Der User, der der Rechnung zugeteilt wurde',
  })
  user: User;

  @ApiProperty({
    example: 'cart123',
    description: 'Der Warenkorb, aus der diese Rechnung erstellt wurde',
  })
  cart: Cart;

  @ApiProperty({
    example: 200.5,
    description: 'Der Gesamtbetrag der Rechnung nach Abzug der Steuern',
  })
  @IsNumber()
  totalNet: number;

  @ApiProperty({
    example: 200.5,
    description: 'Der Gesamtbetrag der Rechnung mit Steuern',
  })
  @IsNumber()
  totalGross: number;

  @ApiProperty({
    example: 19.0,
    description: 'Der Steuersatz in Prozent',
  })
  @IsNumber()
  taxRate: number;

  @ApiProperty({
    example: '2024-12-27T12:00:00Z',
    description: 'Das Erstellungsdatum der Rechnung',
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    example: '2024-12-27T12:00:00Z',
    description: 'Das Datum zu dem bezahlt werden muss',
  })
  @IsDate()
  dueDate: Date;

  @ApiProperty({
    example: 'PO00001',
    description: 'Rechnungsnummer',
  })
  @IsNumber()
  invoiceNumber: number;

  @ApiProperty({
    example: 'pending',
    description: 'Der Status der Rechnung',
    enum: ['pending', 'paid', 'shipped', 'cancelled'],
  })
  @IsEnum(['pending', 'paid', 'shipped', 'cancelled'])
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';

  @ApiProperty({
    example: 'EUR',
    description: 'Währung',
    enum: ['EUR', 'USD', 'GBP'],
  })
  @IsEnum(['EUR', 'USD', 'GBP'])
  currency: 'EUR' | 'USD' | 'GBP';

  @ApiProperty({
    example: 'false',
    description: 'Ist die Rechnung bezahlt?',
  })
  @IsBoolean()
  paid: boolean;

  @ApiProperty({
    example: '2024-12-27T12:00:00Z',
    description: 'Das Datum, an dem bezahlt wurde',
  })
  @IsDate()
  paidAt: Date;

  @ApiProperty({
    example: 'Bitte aufpassen, zerbrechlich',
    description: 'Notiz zu der Rechnung',
  })
  @IsString()
  notes: string;
}
