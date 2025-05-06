import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreatePaymentIntent } from './stripe.dto';
import { ApiOperation, ApiBody } from '@nestjs/swagger';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({ summary: 'Erstellt eine neue Payment Intent für Stripe' })
  @ApiBody({
    type: CreatePaymentIntent,
    description: 'Daten zum Erstellen einer neuen Payment Intent (Betrag und Währung)',
  })
  @Post()
  async createPaymentIntent(@Body() createPaymentIntent: CreatePaymentIntent) {
    const paymentIntent = await this.stripeService.createPaymentIntent(
      createPaymentIntent.amount,
      createPaymentIntent.currency,
    );
    return paymentIntent;
  }
}
