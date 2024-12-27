import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './user-login.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserData } from './user-login.dto';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  constructor(private userDataService: LoginService) {}

  @ApiOperation({ summary: 'Mit Userdaten einloggen' })
  @ApiResponse({ status: 200, description: 'Login erfolgreich.' })
  @ApiResponse({ status: 403, description: 'Zugriff verweigert.' })
  @Post('loginUser')
  async sendUserLoginData(@Body() itemData: UserData): Promise<UserData> {
    console.log(itemData);
    return this.userDataService.sendUserLoginData(itemData);
  }

  @ApiOperation({ summary: 'Eingeloggten User abmelden' })
  @ApiResponse({ status: 200, description: 'Logout erfolgreich.' })
  @ApiResponse({ status: 403, description: 'Zugriff verweigert.' })
  @Post('logoutUser')
  async sendUserLogoutData(@Body() itemData: UserData): Promise<boolean> {
    console.log(itemData);
    return this.userDataService.sendUserLogoutData(itemData);
  }
}
