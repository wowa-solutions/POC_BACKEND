import { QuestCategory } from 'src/enums/enums';
import { IsString, IsEnum, IsBoolean } from 'class-validator';

export class QuestDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(QuestCategory)
  category: QuestCategory;

  @IsString()
  addOn: string;

  @IsString()
  path: string;

  @IsString()
  userId: string;

  @IsBoolean()
  activated: boolean;
}
