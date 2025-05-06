import { Controller, Delete, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PokemonSetService } from './pokemon-set.service';
import { PokemonSet } from './pokemon-set.entity';

@Controller('pokemon-sets')
export class PokemonSetController {
  constructor(private readonly pokemonService: PokemonSetService) {}

  @Get()
  async findAll(): Promise<PokemonSet[]> {


    console.log(await this.pokemonService.findAll())
    return await this.pokemonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PokemonSet> {
    const card = await this.pokemonService.findOne(id);
    if (!card) {
      throw new HttpException('Card not found', HttpStatus.NOT_FOUND);
    }
    return card;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<{ deleted: boolean }> {
    const result = await this.pokemonService.deleteOne(id);
    return { deleted: result };
  }

  @Delete()
  async deleteAll(): Promise<{ deletedCount: number }> {
    const result = await this.pokemonService.deleteAll();
    return { deletedCount: result };
  }
}
