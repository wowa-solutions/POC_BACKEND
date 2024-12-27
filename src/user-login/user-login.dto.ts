import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsEmail, IsOptional, IsEnum, IsDateString, IsNotEmpty } from 'class-validator';

export class UserData {
  @ApiProperty({
    example: '60d21b4667d0d8992e610c85',
    description: 'Eindeutige ID des Benutzers',
  })
  @IsString()
  _id: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'E-Mail-Adresse des Benutzers',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'john_doe',
    description: 'Benutzername des Benutzers',
    required: false,
  })
  @IsString()
  @IsOptional()
  userName?: string;

  @ApiProperty({
    example: 'password123',
    description: 'Passwort des Benutzers',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: '12345',
    description: 'Postleitzahl des Benutzers',
  })
  @IsString()
  postcode: string;

  @ApiProperty({
    example: 'John',
    description: 'Vorname des Benutzers',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Nachname des Benutzers',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Main Street',
    description: 'Straße des Benutzers',
  })
  @IsString()
  street: string;

  @ApiProperty({
    example: '12B',
    description: 'Straßenummer des Benutzers',
  })
  @IsString()
  streetnumber: string;

  @ApiProperty({
    example: 'Germany',
    description: 'Land des Benutzers',
  })
  @IsString()
  country: string;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob der Benutzer eingeloggt ist',
  })
  @IsBoolean()
  loggedin: boolean;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob der Benutzer bestätigt wurde',
  })
  @IsBoolean()
  confirmed: boolean;

  @ApiProperty({
    example: 'user',
    enum: ['user', 'admin'],
    description: 'Rolle des Benutzers (user oder admin)',
  })
  @IsEnum(['user', 'admin'])
  role: 'user' | 'admin';
}

// UserManagement DTO (Kann auch für die Registrierung verwendet werden)
export class UserManagement {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'E-Mail-Adresse des Benutzers',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'john_doe',
    description: 'Benutzername des Benutzers',
    required: false,
  })
  @IsString()
  @IsOptional()
  userName?: string;

  @ApiProperty({
    example: 'password123',
    description: 'Passwort des Benutzers',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: '12345',
    description: 'Postleitzahl des Benutzers',
  })
  @IsString()
  postcode: string;

  @ApiProperty({
    example: 'John',
    description: 'Vorname des Benutzers',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Nachname des Benutzers',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Main Street',
    description: 'Straße des Benutzers',
  })
  @IsString()
  street: string;

  @ApiProperty({
    example: '12B',
    description: 'Straßenummer des Benutzers',
  })
  @IsString()
  streetnumber: string;

  @ApiProperty({
    example: 'Germany',
    description: 'Land des Benutzers',
  })
  @IsString()
  country: string;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob der Benutzer eingeloggt ist',
  })
  @IsBoolean()
  loggedin: boolean;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob der Benutzer bestätigt wurde',
  })
  @IsBoolean()
  confirmed: boolean;

  @ApiProperty({
    example: 'user',
    enum: ['user', 'admin'],
    description: 'Rolle des Benutzers (user oder admin)',
  })
  @IsEnum(['user', 'admin'])
  role: 'user' | 'admin';
}

// UserSettings DTO
export class UserSettings {
  @ApiProperty({
    example: '60d21b4667d0d8992e610c85',
    description: 'Eindeutige ID des Settings',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: 'user123',
    description: 'ID des Benutzers, dem die Einstellungen gehören',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'dark',
    description: 'Thema der Benutzeroberfläche (z.B. dunkel oder hell)',
  })
  @IsString()
  theme: string;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob Benachrichtigungen aktiviert sind',
  })
  @IsBoolean()
  notifications: boolean;

  @ApiProperty({
    example: true,
    description: 'Gibt an, ob E-Mail-Benachrichtigungen aktiviert sind',
  })
  @IsBoolean()
  emailNotifications: boolean;
}

// UserTokenData DTO
export class UserTokenData {
  @ApiProperty({
    example: 1,
    description: 'ID des Tokens',
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: 'user123',
    description: 'ID des Benutzers, dem das Token gehört',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'abcdef123456',
    description: 'Token-Wert, der für Authentifizierungszwecke verwendet wird',
  })
  @IsString()
  tokenValue: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59Z',
    description: 'Ablaufdatum des Tokens im ISO-Format',
  })
  @IsDateString()
  expires: string;
}

// UserComment DTO
export class UserComment {
  @ApiProperty({
    example: 1,
    description: 'Eindeutige ID des Kommentars',
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: 'Dieser Artikel ist großartig!',
    description: 'Text des Kommentars',
  })
  @IsString()
  text: string;

  @ApiProperty({
    example: 'user123',
    description: 'ID des Benutzers, der den Kommentar geschrieben hat',
  })
  @IsString()
  userId: string;
}

// Employee DTO
export class Employee {
  @ApiProperty({
    example: 1,
    description: 'Benutzername des Mitarbeiters',
  })
  @IsNumber()
  username: number;

  @ApiProperty({
    example: 'active',
    description: 'Status des Mitarbeiters (z.B. aktiv, inaktiv)',
  })
  @IsString()
  status: string;

  @ApiProperty({
    example: 'IT-Entwicklung',
    description: 'Arbeitsbereich des Mitarbeiters',
  })
  @IsString()
  work_area: string;

  @ApiProperty({
    example: 3,
    description: 'Rollen-ID des Mitarbeiters',
  })
  @IsNumber()
  roles: number;
}

// Admin DTO
export class Admin {
  @ApiProperty({
    example: 1,
    description: 'Benutzername des Admins',
  })
  @IsNumber()
  username: number;

  @ApiProperty({
    example: 'active',
    description: 'Status des Admins (z.B. aktiv, inaktiv)',
  })
  @IsString()
  status: string;

  @ApiProperty({
    example: 'Management',
    description: 'Arbeitsbereich des Admins',
  })
  @IsString()
  work_area: string;

  @ApiProperty({
    example: 1,
    description: 'Rollen-ID des Admins',
  })
  @IsNumber()
  roles: number;
}
