import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserSchema } from './user-login.entity';
import { UserData } from './user-login.dto';

@Injectable()
export class LoginService {

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserData>,
  ) {}

  async sendUserLoginData(userData: UserData): Promise<UserData> {
    var isPasswordMatching = false;
    const user = (await this.userModel
      .findOne({
        $or: [{ email: userData.email }, { userName: userData.userName }],
      })
      .exec()) as unknown as UserData;

    console.log(user);

    if (user) {
      isPasswordMatching = await bcrypt.compare(
        userData.password,
        user.password,
      );
    }

    if(isPasswordMatching){
      const updatedUser = await this.userModel.findByIdAndUpdate(
        user._id,
        { loggedin: true },
        { new: true }
      ).exec() as UserData;

      return updatedUser;
    }

    else{
      return null;
    }
  }

  async sendUserLogoutData(userData: UserData): Promise<boolean> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userData._id,
      { loggedin: false },
      { new: false }
    ).exec() as UserData;

    if(updatedUser != null){
      return true
    }

    return false;
  }
}
