import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './user-signup.service';
import { UserData } from 'src/user-login/user-login.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Signup')  // Gruppiert die Endpunkte unter dem Tag 'Signup' für die API-Dokumentation
@Controller('signup')
export class SignupController {
  constructor(private readonly userDataService: SignupService) {}

  @ApiOperation({ summary: 'Erstellt ein neues Benutzerkonto' })
  @ApiResponse({ status: 201, description: 'Benutzerkonto erfolgreich erstellt.' })
  @ApiResponse({ status: 400, description: 'Ungültige Benutzerdaten.' })
  @ApiResponse({ status: 500, description: 'Interner Serverfehler' })
  @Post()
  async createUserData(@Body() userData: UserData): Promise<UserData> {
    console.log('Try to create user data...');
    return this.userDataService.createUserData(userData);
  }
}
