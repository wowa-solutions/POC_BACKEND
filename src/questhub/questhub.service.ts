import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { QuestDto } from './questhub.dto';

@Injectable()
export class QuestService {
  constructor(
    @InjectModel('Quest') private readonly QuestModel: Model<QuestDto>,
  ) {}

  async createQuest(Quest: QuestDto): Promise<QuestDto> {
    const newQuest = new this.QuestModel(Quest);
    return newQuest.save();
  }

  async getAllQuests(): Promise<QuestDto[]> {
    return this.QuestModel.find().exec();
  }

  async getQuestById(id: string): Promise<QuestDto> {
    return this.QuestModel.findById(id).exec();
  }

  async deleteQuest(id: string): Promise<QuestDto> {
    return this.QuestModel.findByIdAndDelete(id).exec();
  }

  async updateQuest(
    id: string,
    updateData: Partial<QuestDto>,
  ): Promise<QuestDto> {
    return this.QuestModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }
}
