import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
    @Prop({
        required: true,
        type: ObjectId,
        ref: 'User'
    })
    receiverId : ObjectId;
    @Prop({
        required: true,
        type: ObjectId,
        ref: 'User'
    })
    senderId : ObjectId;
    @Prop()
    amount: number;

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);