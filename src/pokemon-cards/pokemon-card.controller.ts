import { Controller, Delete, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PokemonCardService } from './pokemon-card.service';
import { PokemonCard } from './pokemon-card.entity';

@Controller('pokemon-cards')
export class PokemonCardController {
  constructor(private readonly pokemonService: PokemonCardService) {}

  @Get()
  async findAll(): Promise<PokemonCard[]> {
    return this.pokemonService.findAll();
  }

  @Get('set/:setId')
    async findBySet(@Param('setId') setId: string): Promise<PokemonCard[]> {
    return this.pokemonService.findBySet(setId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PokemonCard> {
    const card = await this.pokemonService.findOne(id);
    if (!card) {
      throw new HttpException('Card not found', HttpStatus.NOT_FOUND);
    }
    return card;
  }

  @Post()
  async createMany(@Body() cards: PokemonCard[]): Promise<PokemonCard[]> {
    console.log("uploading cards...")
    return this.pokemonService.createMany(cards);
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
