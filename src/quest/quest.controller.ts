import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { QuestService } from './quest.service';
import { ApiOperation, ApiQuery, ApiBody, ApiParam } from '@nestjs/swagger';
import { QuestDto } from './quest.dto';

@Controller('Quests')
export class QuestController {
  constructor(private readonly QuestService: QuestService) {}

  @ApiOperation({ summary: 'Erstelle eine neue Quest' })
  @ApiBody({ type: QuestDto, description: 'Die Daten der neuen Quest' })
  @Post()
  async createQuest(@Body() Quest: QuestDto): Promise<QuestDto> {
    console.log('Create new Quest...');
    return this.QuestService.createQuest(Quest);
  }

  @ApiOperation({ summary: 'Finde alle Quests' })
  @Get()
  async getAllQuests(): Promise<QuestDto[]> {
    console.log('Try to get Quests...');
    return this.QuestService.getAllQuests();
  }

  @ApiOperation({ summary: 'Finde eine bestimmte Quest anhand der ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Quest, die abgerufen werden soll',
  })
  @Get('single')
  async getQuestById(@Query('id') id: string): Promise<QuestDto> {
    console.log('Try to get Quest by id:', id);
    return this.QuestService.getQuestById(id);
  }

  @ApiOperation({ summary: 'Lösche eine Quest' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Quest, die gelöscht werden soll',
  })
  @Delete()
  async deleteQuest(@Query('id') id: string): Promise<QuestDto> {
    console.log('Try to delete Quest by id:', id);
    return this.QuestService.deleteQuest(id);
  }

  @ApiOperation({ summary: 'Aktualisiere eine Quest' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Quest, die aktualisiert werden soll',
  })
  @ApiBody({
    type: QuestDto,
    description:
      'Die Daten, die aktualisiert werden sollen. Felder, die nicht angegeben sind, bleiben unverändert.',
  })
  @Patch()
  async updateQuest(
    @Query('id') id: string,
    @Body() updateData: Partial<QuestDto>,
  ): Promise<QuestDto> {
    console.log('Try to update Quest by id:', id, 'with data:', updateData);
    return this.QuestService.updateQuest(id, updateData);
  }
}
