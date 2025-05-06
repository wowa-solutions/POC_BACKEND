import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user-login/user-login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { SignupModule } from './user-signup/user-signup.module';
import { UserManagementModule } from './user-management/user-management.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CartModule } from './cart/cart.module';
import { EmailModule } from './email/email.module';
import { StripeModule } from './stripe/stripe.module';
import { PokemonCardModule } from './pokemon-cards/pokemon-card.module';
import { PokemonSetModule } from './pokemon-sets/pokemon-set.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://backend-test:Test123@backend-test.dayvnzs.mongodb.net/',
    ),
    ItemsModule,
    UserManagementModule,
    CartModule,
    InvoiceModule,
    LoginModule,
    SignupModule,
    EmailModule,
    StripeModule,
    PokemonCardModule,
    PokemonSetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
