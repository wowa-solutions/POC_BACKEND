import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { Quest } from './quest.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quest', schema: Quest }])],
  controllers: [QuestController],
  providers: [QuestService],
})
export class QuestModule {}
