import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import *  as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { Transaction } from './schemas/transaction.schema';
import { Response } from 'express';
@Injectable()
export class AccountService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    @InjectModel(Transaction.name)
    private transactionModel: mongoose.Model<Transaction>,
  ) {
    // constructor
  }
  // get check balance
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

  async transfer(user , receiver : number, amount : number,res: Response) {
    const userId =  user.id;
    user = await this.userModel.findOne({ _id: userId})
    if (!user) {
      res.status(404).send("User not found");
    }
    if (+user.balance < +amount) {
      res.status(400).send("Insufficient balance");
    }

    const receiverUser = await this.userModel.findOne({ phoneNumber : receiver})
    if (!receiverUser) {
      res.status(404).send("Receiver not found");
    }
    console.log({
      receiverId: receiverUser._id,
      senderId: user._id,
      amount: amount
    });
    const transaction = await this.transactionModel.create({
      amount: amount,
      receiverId: receiverUser._id,
      senderId: user._id
    })
    console.log(transaction);
    user.balance = +user.balance - +amount;
    receiverUser.balance = +receiverUser.balance + +amount;
    user.save();
    receiverUser.save();
    res.status(200).send(
      {
        message: "Transfer successful",
        balance: user.balance
      }
    );
  }

  async lastTransactions(user,res:Response) {
    const userId =  user.id;
    user = await this.userModel.findOne({ _id: userId})
    if (!user) {
      res.status(404).send("User not found");
    }
    const transactions = await this.transactionModel.find({ $or: [{ receiverId: user._id }, { senderId: user._id }] })
    .populate({
      "path": "receiverId",
      "select": "fullName"
    })
    .populate({
      "path": "senderId",
      "select": "fullName"
    })
    
    res.status(200).send({transactions: transactions});
  }
}
