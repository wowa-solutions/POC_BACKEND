import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PokemonSetDocument = PokemonSet & Document;

@Schema()
export class PokemonSet {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  series: string;

  @Prop({ required: true })
  printedTotal: number;

  @Prop({ required: true })
  total: number;

  @Prop({
    type: {
      unlimited: String,
      standard: String,
      expanded: String,
    },
    required: true,
  })
  legalities: {
    unlimited?: string;
    standard?: string;
    expanded?: string;
  };

  @Prop()
  ptcgoCode: string;

  @Prop({ required: true })
  releaseDate: string;

  @Prop()
  updatedAt: string;

  @Prop({
    type: {
      symbol: String,
      logo: String,
    },
    required: true,
  })
  images: {
    symbol: string;
    logo: string;
  };
}

export const PokemonSetSchema = SchemaFactory.createForClass(PokemonSet);
