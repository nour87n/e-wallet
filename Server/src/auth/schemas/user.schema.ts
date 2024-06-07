import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Schema()
export class User extends Document {
    @Prop({
        unique: true,
        required: true
    })
    email: string;

    @Prop({
        unique: true,
        required: true
    })
    phoneNumber: number;

    @Prop({
        required: true
    })
    fullName: string;

    @Prop({
        required: true

    })
    password: string;
    @Prop()
    cardNumber: number;
    @Prop({
        default: 0
    })
    balance: number;
    comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.comparePassword = async function (userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.password);
};