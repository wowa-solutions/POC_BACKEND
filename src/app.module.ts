import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user-login/user-login.module';
import { ItemsModule } from './items/items.module';
import { SignupModule } from './user-signup/user-signup.module';
import { UserManagementModule } from './user-management/user-management.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CartModule } from './cart/cart.module';
import { EmailModule } from './email/email.module';
import { StripeModule } from './stripe/stripe.module';
import { PokemonCardModule } from './pokemon-cards/pokemon-card.module';
import { PokemonSetModule } from './pokemon-sets/pokemon-set.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MongooseModule using ConfigService
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),

    // Other modules
    ItemsModule,
    UserManagementModule,
    CartModule,
    InvoiceModule,
    PurchaseOrderModule,
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
