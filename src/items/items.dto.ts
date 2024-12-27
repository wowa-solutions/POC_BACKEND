import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';
import { DishType } from './items.entity';

export class Item {
  @ApiProperty({ example: ['Tomaten', 'Mozzarella'], description: 'Liste der Zutaten des Items' })
  @IsArray()
  @IsString({ each: true })
  incredience: string[];

  @ApiProperty({ example: 'Frischer Salat mit Tomaten', description: 'Beschreibung des Items' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'Caprese-Salat', description: 'Titel des Items' })
  @IsString()
  title: string;

  @ApiProperty({ example: 9.99, description: 'Preis des Items' })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 5, description: 'Verfügbare Menge des Items' })
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ApiProperty({ example: 'https://example.com/item-image.jpg', description: 'Link zu einem Bild oder einer Ressource des Items' })
  @IsUrl()
  link: string;

  @ApiProperty({ example: 'MainCourse', description: 'Der Typ des Gerichts', enum: DishType })
  dishType: DishType;
}