import { Module } from '@nestjs/common';
import { UserManagementModule } from 'src/user-management/user-management.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  imports: [UserManagementModule],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}