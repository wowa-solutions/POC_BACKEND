import { Controller, Post, Query } from '@nestjs/common';
import { UserManagementService } from 'src/user-management/user-management.service';
import { EmailService } from '../email/email.service';
import { getPasswordResetTemplate } from '../email/templates/password-reset.template';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('emails')
export class EmailController {
  constructor(
    private readonly userManagementService: UserManagementService,
    private readonly emailService: EmailService,
  ) {}

  @ApiOperation({ summary: 'Passwort vergessen Email senden' })
  @ApiQuery({
    name: 'email',
    required: true,
    type: String,
    description: 'Die E-Mail-Adresse des Benutzers, der das Passwort zurücksetzen möchte',
  })
  @Post('password')
  async forgotPassword(@Query('email') email: string): Promise<string> {
    console.log("Try to send email for forgotten password of email address: ", email);
    const user = await this.userManagementService.getUserByEmail(email);
    if (user) {
      const token = 'generate-token-here';  // Hier sollte der Token generiert werden
      const emailContent = getPasswordResetTemplate(user.firstName, token);
      await this.emailService.sendEmail(user.email, 'Password Reset', emailContent);
      return 'Email sent successfully';
    }
    throw new Error('User not found');
  }
}
