import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class Item {
  @ApiProperty({
    example: ['Tomaten', 'Mozzarella'],
    description: 'Liste der Zutaten des Items, wie zum Beispiel für ein Gericht oder Produkt',
  })
  @IsArray()
  @IsString({ each: true })
  incredience: string[];

  @ApiProperty({
    example: 'Frischer Salat mit Tomaten',
    description: 'Detaillierte Beschreibung des Items, wie z.B. Zubereitung oder Zusammensetzung',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'Caprese-Salat',
    description: 'Titel oder Name des Items, der das Produkt beschreibt',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 9.99,
    description: 'Preis des Items in der jeweiligen Währung (z.B. Euro)',
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: 5,
    description: 'Verfügbare Menge des Items im Lager oder zum Verkauf',
  })
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    example: 'https://example.com/item-image.jpg',
    description: 'Link zu einem Bild oder einer anderen Ressource, die das Item visuell repräsentiert',
  })
  @IsUrl()
  link: string;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob das Item momentan auf Lager ist oder nicht',
  })
  inStock: boolean;

  @ApiProperty({
    example: 'FrischeProdukte',
    description: 'Die Marke oder der Hersteller des Items',
  })
  brand: string;

  @ApiProperty({
    example: 'Frischprodukte',
    description: 'Produktkategorie oder Name des Produkts',
  })
  product: string;

  @ApiProperty({
    example: 10,
    description: 'Referenz zur Cart-Nummer, mit der das Item verbunden ist (z.B. für Einkaufswagen)',
  })
  cart: number;

  @ApiProperty({
    example: 1,
    description: 'Ausgewählte Variante des Items (z.B. Farbe, Größe)',
  })
  selectedVariant: number;

  @ApiProperty({
    example: ['Enthält Milch, Gluten'],
    description: 'Zusätzliche Details zum Item, wie Zutaten oder spezifische Merkmale',
  })
  details: string[];

  @ApiProperty({
    description: 'Liste von Varianten für dieses Item, z.B. unterschiedliche Farben oder Größen',
  })
  variants: Variant[];
}

export class Variant {
  @ApiProperty({
    example: 1,
    description: 'Eindeutige ID der Variante, um sie von anderen Varianten zu unterscheiden',
  })
  id: number;

  @ApiProperty({
    example: 'Rot',
    description: 'Farbe oder andere visuelle Attribute der Variante',
  })
  color: string;

  @ApiProperty({
    example: 'https://example.com/variant-image.jpg',
    description: 'Link zu einem Bild, das die Variante des Items zeigt',
  })
  image: string;

  @ApiProperty({
    example: 20,
    description: 'Verfügbare Menge der Variante im Lager oder zum Verkauf',
  })
  quantity: number;
}
