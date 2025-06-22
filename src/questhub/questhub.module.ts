import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestService } from './questhub.service';
import { QuestController } from './questhub.controller';
import { Quest } from './questhub.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quest', schema: Quest }])],
  controllers: [QuestController],
  providers: [QuestService],
})
export class QuestModule {}
