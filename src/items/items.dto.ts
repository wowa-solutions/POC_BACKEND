import { ApiProperty } from '@nestjs/swagger';

export class Variant {
  @ApiProperty({
    example: 1,
    description: 'Eindeutige ID der Variante',
  })
  id: number;

  @ApiProperty({
    example: 'Rot',
    description: 'Farbe der Variante',
  })
  color: string;

  @ApiProperty({
    example: 'https://example.com/variant-image.jpg',
    description: 'Bild zur Variante',
  })
  image: string;

  @ApiProperty({
    example: 20,
    description: 'Menge der Variante im Lager',
  })
  quantity: number;

  @ApiProperty({
    example: ['Enthält Milch', 'Glutenfrei'],
    description: 'Zusätzliche Eigenschaften der Variante',
  })
  itemProperties: string[];
}

export class Item {
  @ApiProperty()
  hashTags: string[];

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  inStock: boolean;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  selectedVariant: number;

  @ApiProperty({ type: [Variant] })
  variants: Variant[];
}
