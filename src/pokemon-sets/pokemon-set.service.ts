import { Injectable } from "@nestjs/common";
import { PokemonSet, PokemonSetDocument } from "./pokemon-set.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class PokemonSetService {
  constructor(@InjectModel('pokemon-sets') private model: Model<PokemonSetDocument>) {}

  async findAll(): Promise<PokemonSet[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<PokemonSet | null> {
    return this.model.findOne({ id }).exec();
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
