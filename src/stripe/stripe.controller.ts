import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreatePaymentIntent } from '../interfaces/stripe.interface';


@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('')
  async createPaymentIntent(@Body() createPaymentIntent: CreatePaymentIntent) {
    const paymentIntent = await this.stripeService.createPaymentIntent(createPaymentIntent.amount, createPaymentIntent.currency);
    return paymentIntent;
  }
}