import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsMongoId, IsOptional, IsString, MinLength, MaxLength, IsBoolean, IsPostalCode } from 'class-validator';

export class UserData {
  @ApiProperty({ example: '61b9f1a5f1d2e4b7f30f1c4d', description: 'Die eindeutige ID des Benutzers' })
  @IsMongoId()  // Validiert, dass es eine gültige MongoDB ID ist
  _id: string;

  @ApiProperty({ example: 'user@example.com', description: 'Die E-Mail-Adresse des Benutzers', required: false })
  @IsOptional()  // Optionales Feld
  @IsEmail()  // Validiert, dass es sich um eine gültige E-Mail-Adresse handelt
  email?: string;

  @ApiProperty({ example: 'User123', description: 'Der Benutzername', required: false })
  @IsOptional()  // Optionales Feld
  @IsString()  // Validiert, dass der Wert ein String ist
  @MinLength(3)  // Benutzername muss mindestens 3 Zeichen haben
  @MaxLength(20)  // Benutzername darf maximal 20 Zeichen haben
  userName?: string;

  @ApiProperty({ example: 'securePassword123', description: 'Das Passwort des Benutzers' })
  @IsString()
  @MinLength(8)  // Passwort muss mindestens 8 Zeichen lang sein
  password: string;

  @ApiProperty({ example: '12345', description: 'Die Postleitzahl des Benutzers' })
  @IsPostalCode('any')  // Validiert, dass es sich um eine gültige Postleitzahl handelt
  postcode: string;

  @ApiProperty({ example: 'Max', description: 'Der Vorname des Benutzers' })
  @IsString()
  @MinLength(2)  // Vorname muss mindestens 2 Zeichen lang sein
  firstName: string;

  @ApiProperty({ example: 'Mustermann', description: 'Der Nachname des Benutzers' })
  @IsString()
  @MinLength(2)  // Nachname muss mindestens 2 Zeichen lang sein
  lastName: string;

  @ApiProperty({ example: 'Hauptstraße', description: 'Die Straße des Benutzers' })
  @IsString()
  street: string;

  @ApiProperty({ example: '42', description: 'Die Hausnummer des Benutzers' })
  @IsString()
  streetnumber: string;

  @ApiProperty({ example: 'Deutschland', description: 'Das Land des Benutzers' })
  @IsString()
  country: string;

  @ApiProperty({ example: true, description: 'Gibt an, ob der Benutzer derzeit eingeloggt ist' })
  @IsBoolean()  // Validiert, dass der Wert ein Boolean ist
  loggedin: boolean;

  @ApiProperty({ example: false, description: 'Gibt an, ob der Benutzer bestätigt wurde' })
  @IsBoolean()  // Validiert, dass der Wert ein Boolean ist
  confirmed: boolean;

  @ApiProperty({ example: 'user', description: 'Die Rolle des Benutzers', enum: ['user', 'admin'] })
  @IsEnum(['user', 'admin'])  // Validiert, dass der Wert entweder 'user' oder 'admin' ist
  role: 'user' | 'admin';
}
