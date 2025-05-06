import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSetController } from './pokemon-set.controller';
import { PokemonSetService } from './pokemon-set.service';
import { PokemonSet, PokemonSetSchema } from './pokemon-set.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'pokemon-sets', schema: PokemonSetSchema }])],
  providers: [PokemonSetService],
  controllers: [PokemonSetController],
  exports: [PokemonSetService],
})
export class PokemonSetModule {}
