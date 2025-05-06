import { Get, Injectable, Query } from "@nestjs/common";
import { PokemonCard, PokemonCardDocument } from "./pokemon-card.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class PokemonCardService {
  constructor(@InjectModel('pokemon-cards') private model: Model<PokemonCardDocument>) {}

  async findAll(): Promise<PokemonCard[]> {
    return this.model.find().exec();
  }

  async findBySet(setId: string): Promise<PokemonCard[]> {
    return this.model.find({ 'set.id': setId }).exec();
  }

  async findOne(id: string): Promise<PokemonCard | null> {
    return this.model.findOne({ id }).exec();
  }

  async createMany(cards: PokemonCard[]): Promise<PokemonCard[]> {
    if (!cards.length) return [];
  
    const orFilters = cards.map(card => ({
      name: card.name,
      nationalPokedexNumbers: { $eq: card.nationalPokedexNumbers },
      'set.id': card.set.id,
      'set.name': card.set.name,
      'set.series': card.set.series,
    }));
  
    const existing = await this.model.find({ $or: orFilters }).lean();
  
    const existingKeys = new Set(
      existing.map(card =>
        `${card.name}_${card.nationalPokedexNumbers.join('-')}_${card.set.id}_${card.set.name}_${card.set.series}`
      )
    );
  
    const newCards = cards.filter(card => {
      const key = `${card.name}_${card.nationalPokedexNumbers.join('-')}_${card.set.id}_${card.set.name}_${card.set.series}`;
      return !existingKeys.has(key);
    });
  
    if (!newCards.length) return [];
  
    console.log("Uploaded " + newCards.length + " cards successfully :)")
    return this.model.insertMany(newCards);
  }

  async deleteOne(id: string): Promise<boolean> {
    const res = await this.model.deleteOne({ id });
    return res.deletedCount > 0;
  }
  
  async deleteAll(): Promise<number> {
    const res = await this.model.deleteMany({});
    return res.deletedCount;
  }
}
