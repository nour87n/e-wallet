import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AuthenticationMiddleware } from "./middlware/authntication.middlware"
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../auth/schemas/user.schema';
import { TransactionSchema } from './schemas/transaction.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('account');
  }
}
