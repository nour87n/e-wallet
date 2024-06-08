import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import *  as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {
    // constructor
  }
  // get check blance
  async getCheckBalance(account) {
    // return the balance
    const userId =  account.id;
    // get the balance from the database mongoose user model
    const user = await this.userModel.findOne({ _id: userId})
    return {
      balance: user.balance
    };
    // return the balance
  }

  async addBalance(user,addBalance) {
    const userId =  user.id;
    user = await this.userModel.findOne({ _id: userId})
    if (!user) {
      return {
        message: "User not found"
      };
    }
    user.balance = +user.balance + addBalance;
    user.save();
    return {
      balance: user.balance
    };
  }

  async transfer(user , receiver : number, amount : number) {
    const userId =  user.id;
    user = await this.userModel.findOne({ _id: userId})
    if (!user) {
      return {
        message: "User not found"
      };
    }
    if (user.balance < amount) {
      return {
        message: "Insufficient balance"
      };
    }

    const receiverUser = await this.userModel.findOne({ phoneNumber : receiver})
    if (!receiverUser) {
      return {
        message: "Receiver not found"
      };
    }

    user.balance = +user.balance - amount;
    receiverUser.balance = +receiverUser.balance + amount;
    user.save();
    receiverUser.save();
    return {
      balance: user.balance
    };
  }
}
