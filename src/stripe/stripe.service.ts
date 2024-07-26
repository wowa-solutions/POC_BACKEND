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
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: ['card', 'paypal'],
      });
      return paymentIntent;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
}