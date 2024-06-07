import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import *  as mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        private jwtService: JwtService
    ) {

    }
    async login(email, password, res ) {
        const user = await this.userModel.findOne({ email: email }).exec();
        if (!user) {
            return 'User not found';
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return 'Password is incorrect';
        }
        const payload = { email: user.email, sub: user._id };
        const access_token = this.jwtService.sign(payload);
        res.cookie('access_token', access_token,
            {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30
            });
        res.send({
            userId: user._id,
            email: user.email,
            phoneNumber: user?.phoneNumber,
            fullName: user.fullName,
            cardNumber: user.cardNumber
        });
    }

    async register(email, phoneNumber, fullName, password , res) {
        //create a random card number have 6 digits
        const cardNumber = Math.floor(100000 + Math.random() * 900000);
        const user = await this.userModel.create({
            email: email,
            phoneNumber: phoneNumber,
            fullName: fullName,
            password: password,
            cardNumber: cardNumber
        });
        const payload = { email: user.email, sub: user._id };
        const access_token = this.jwtService.sign(payload);
        res.cookie('access_token', access_token,
            {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30
        });    
        return {
            userId: user._id,
            email: user.email,
            phoneNumber: user?.phoneNumber,
            fullName: user.fullName,
            cardNumber: user.cardNumber
        }
    }
    logout(res) {
        res.clearCookie('access_token');
        return 'logout successfully';
    }
}
