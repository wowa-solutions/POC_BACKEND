import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { UserData } from './user-login.dto';

const AddressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  streetNumber: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  additionalAddress: { type: String, required: false },
});

export const UserSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  userAddress: { type: AddressSchema, required: true },
  loggedin: { type: Boolean, required: true },
  confirmed: { type: Boolean, required: true },
  role: { type: String, required: true },
});

export default mongoose.model<UserData>('User', UserSchema);
