import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonCardController } from './pokemon-card.controller';
import { PokemonCardService } from './pokemon-card.service';
import { PokemonCard, PokemonCardSchema } from './pokemon-card.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'pokemon-cards', schema: PokemonCardSchema }])],
  providers: [PokemonCardService],
  controllers: [PokemonCardController],
  exports: [PokemonCardService],
})
export class PokemonCardModule {}
