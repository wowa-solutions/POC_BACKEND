import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: 'Email', description: 'Email des Users' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: 'Username', description: 'Username des Users' })
  @Prop({ required: true })
  userName: string;

  @ApiProperty({ example: 'Passwort', description: 'Passwort des Users' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({
    example: 'Postleitzahl',
    description: 'Postleitzahl des Users',
  })
  @Prop({ required: false })
  postcode: string;

  @Prop({ required: false })
  street: string;

  @Prop({ required: false })
  streetnumber: string;

  @Prop({ required: false })
  country: string;

  @Prop({ required: false })
  city: string;

  @Prop({ default: false })
  loggedin: boolean;

  @Prop({ default: false })
  confirmed: boolean;

  @Prop({ required: true, enum: ['user', 'admin'], default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
