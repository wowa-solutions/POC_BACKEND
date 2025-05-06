import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum, IsBoolean, IsDateString } from 'class-validator';

// Enum für die Task-Kategorie
export enum TaskCategory {
    Datenanalyse = "Datenanalyse",
    Cybersicherheit = "Cybersicherheit",
    Projektmanagement = "Projektmanagement",
    Qualitätssicherung = "Qualitätssicherung",
    Kundenservice = "Kundenservice & Support",
}

export class Task {
  @ApiProperty({
    example: 1,
    description: 'Eindeutige ID der Aufgabe',
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: 'user123',
    description: 'ID des Benutzers, der die Aufgabe erstellt hat',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'Datenanalyse',
    enum: TaskCategory,
    description: 'Kategorie der Aufgabe',
  })
  @IsEnum(TaskCategory)
  category: TaskCategory;

  @ApiProperty({
    example: 'Datenanalyse-Bericht erstellen',
    description: 'Titel der Aufgabe',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'hoch',
    description: 'Priorität der Aufgabe (z.B. hoch, mittel, niedrig)',
  })
  @IsString()
  priority: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59Z',
    description: 'Fälligkeitsdatum der Aufgabe im ISO-Format',
  })
  @IsDateString()
  dueDate: string;

  @ApiProperty({
    example: 'user456',
    description: 'ID des Benutzers, dem die Aufgabe zugewiesen wurde',
  })
  @IsString()
  assignee: string;
}

export class ToDo {
  @ApiProperty({
    example: '1',
    description: 'Eindeutige ID der ToDo-Aufgabe',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: 'Datenanalyse-Bericht vorbereiten',
    description: 'Text der ToDo-Aufgabe',
  })
  @IsString()
  text: string;

  @ApiProperty({
    example: true,
    description: 'Status der ToDo-Aufgabe, ob sie abgeschlossen ist oder nicht',
  })
  @IsBoolean()
  completed: boolean;
}
