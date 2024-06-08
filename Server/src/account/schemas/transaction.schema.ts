import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

class Transaction extends Document {
    @Prop({
        type: ObjectId,
        ref: 'User'
    })
    receiverId: ObjectId;

    @Prop({
        type: ObjectId,
        ref: 'User'
    })
    senderId: ObjectId;

    @Prop()
    amount: number;

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);