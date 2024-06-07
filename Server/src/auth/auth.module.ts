import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '30d' },
      global: true
  }), 
    ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
