import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('sk_test_51Pdx7WRvNM6C7hOQKg656xXmUqMLPMjcpHJNATb2wGYnpx2269UojdadJYuUsI9D0a6FBc4eK9GIUd1gQhLVSFeq00iDrBEL86', {
      apiVersion: '2024-06-20',
    });
  }

  async createPaymentIntent(amount: number, currency: string) {
    return await this.stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });
  }
}