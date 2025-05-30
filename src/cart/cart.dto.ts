import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsMongoId, IsNumber } from 'class-validator';
import { Item } from 'src/items/items.dto'; // Stellen Sie sicher, dass der Pfad korrekt ist

export class Cart {
  @ApiProperty({
    example: '603d2149f1e5c7b9b0e2f7d2',
    description: 'Die Benutzer-ID, die mit diesem Warenkorb verknüpft ist',
  })
  @IsMongoId() // Validiert, dass es eine gültige MongoDB-ID ist
  userId: string;

  @ApiProperty({
    type: [Item],
    description: 'Die Artikel, die im Warenkorb enthalten sind',
  })
  @IsArray() // Validiert, dass es ein Array ist
  items: Item[];

  @ApiProperty({
    example: 'open',
    description: 'Der Status des Warenkorbs',
    enum: ['open', 'completed'],
  })
  @IsEnum(['open', 'completed']) // Validiert, dass der Wert eines der definierten Enum-Werte ist
  status: 'open' | 'completed';

  @ApiProperty({
    example: 199.99,
    description: 'Der Gesamtpreis des Warenkorbs',
  })
  @IsNumber() // Validiert, dass es sich um eine Zahl handelt
  totalPrice: number;

  @ApiProperty({
    example: '2024-12-27T12:00:00Z',
    description: 'Das Erstellungsdatum des Warenkorbs',
  })
  @IsDate() // Validiert, dass es sich um ein gültiges Datum handelt
  createdAt: Date;

  @ApiProperty({
    example: '2024-12-27T12:00:00Z',
    description: 'Das Datum der letzten Aktualisierung des Warenkorbs',
  })
  @IsDate() // Validiert, dass es sich um ein gültiges Datum handelt
  updatedAt: Date;
}
