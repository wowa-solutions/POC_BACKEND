import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PokemonCardDocument = PokemonCard & Document;

@Schema()
export class PokemonCard {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  supertype: string;

  @Prop([String])
  subtypes: string[];

  @Prop()
  hp: string;

  @Prop([String])
  types: string[];

  @Prop([String])
  evolvesTo: string[];

  @Prop({ type: Object })
  attacks: any[];

  @Prop({ type: Object })
  weaknesses: any[];

  @Prop([String])
  retreatCost: string[];

  @Prop()
  convertedRetreatCost: number;

  @Prop({ type: Object })
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    releaseDate: string;
    ptcgoCode: string;
    images: {
      symbol: string;
      logo: string;
    };
    legalities: {
      unlimited?: string;
      standard?: string;
      expanded?: string;
    };
  };

  @Prop()
  number: string;

  @Prop()
  artist: string;

  @Prop()
  rarity: string;

  @Prop()
  flavorText: string;

  @Prop([Number])
  nationalPokedexNumbers: number[];

  @Prop()
  regulationMark: string;

  @Prop()
  common: number;

  @Prop()
  uncommon: number;

  @Prop()
  holo: number;

  @Prop()
  holoreverse: number;

  @Prop()
  ex: number;

  @Prop()
  fullart: number;

  @Prop()
  pokeball: number;

  @Prop()
  masterball: number;

  @Prop()
  promo: number;

  @Prop({
    type: {
      small: String,
      large: String,
    },
  })
  images: {
    small: string;
    large: string;
  };

  @Prop({ type: Object })
  tcgplayer: any;

  @Prop({ type: Object })
  cardmarket: any;
}

export const PokemonCardSchema = SchemaFactory.createForClass(PokemonCard);
