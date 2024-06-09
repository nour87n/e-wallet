import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb+srv://achrafnessighaoui13:blKtHRk7FPw8duqc@cluster0.xgxszyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    AuthModule,
    AccountModule,
  ],
})
export class AppModule {}
