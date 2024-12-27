import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserData } from 'src/user-login/user-login.dto';

@ApiTags('User Management')  // Definiert einen Tag für die Gruppe der Endpunkte
@Controller('users')
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  @ApiOperation({ summary: 'Alle Benutzerdaten abrufen' })
  @ApiResponse({ status: 200, description: 'Alle Benutzerdaten wurden erfolgreich abgerufen.' })
  @ApiResponse({ status: 500, description: 'Interner Serverfehler' })
  @Get()
  async getAllUserData(): Promise<UserData[]> {
    console.log('Try to get all users...');
    return this.userManagementService.getAllUserData();
  }

  @ApiOperation({ summary: 'Benutzerdaten anhand der ID abrufen' })
  @ApiResponse({ status: 200, description: 'Benutzerdaten erfolgreich abgerufen.' })
  @ApiResponse({ status: 404, description: 'Benutzer nicht gefunden' })
  @Get('single')
  async getUserById(@Query('id') id: string): Promise<UserData> {
    console.log('Try to get user by id: ', id, ' ...');
    return this.userManagementService.getUserById(id);
  }

  @ApiOperation({ summary: 'Benutzer anhand der ID löschen' })
  @ApiResponse({ status: 200, description: 'Benutzer erfolgreich gelöscht.' })
  @ApiResponse({ status: 404, description: 'Benutzer nicht gefunden' })
  @Delete()
  async deleteUser(@Query('id') id: string): Promise<UserData> {
    console.log('Try to delete user by id: ', id, ' ...');
    return this.userManagementService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Benutzerdaten anhand der ID aktualisieren' })
  @ApiResponse({ status: 200, description: 'Benutzerdaten erfolgreich aktualisiert.' })
  @ApiResponse({ status: 400, description: 'Ungültige Daten für die Aktualisierung' })
  @ApiResponse({ status: 404, description: 'Benutzer nicht gefunden' })
  @Patch(':id')
  async updateUser(
    @Query('id') id: string,
    @Body() updateData: Partial<UserData>,
  ): Promise<UserData> {
    console.log('Try to update user data by id:', id, 'with data:', updateData);
    return this.userManagementService.updateUser(id, updateData);
  }

  @ApiOperation({ summary: 'Benutzer anhand der E-Mail-Adresse abrufen' })
  @ApiResponse({ status: 200, description: 'Benutzer erfolgreich gefunden.' })
  @ApiResponse({ status: 404, description: 'Benutzer mit dieser E-Mail nicht gefunden' })
  @Post('email')
  async getUserByEmail(@Query('email') email: string): Promise<UserData> {
    console.log('Try to find user by email:', email, ' ...');
    return this.userManagementService.getUserByEmail(email);
  }
}
