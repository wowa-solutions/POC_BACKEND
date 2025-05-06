import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePaymentIntent {
  @ApiProperty({ example: 1000, description: 'Der Zahlungsbetrag in kleinster Währungseinheit (z. B. Cent für USD).' })
  @IsInt()
  @IsPositive()
  amount: number;

  @ApiProperty({ example: 'USD', description: 'Die Währung der Zahlung im ISO-4217-Format.' })
  @IsString()
  @Length(3, 3)
  currency: string;
}
