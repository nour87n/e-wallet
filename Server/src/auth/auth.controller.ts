import { Controller , Post , Get , Body , Res, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/Create-user.dto';
import { UpdateUserDto } from './dtos/Update-user.dto';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() body: UpdateUserDto, @Res({ passthrough: true }) res : Response) {
    return this.authService.login(body.email, body.password,res);
  }

  @Post('register')
  async register(@Body() body: CreateUserDto, @Res({ passthrough: true }) res : Response){
    return  this.authService.register(body.email, body.phoneNumber, body.fullName, body.password , res );
  }

  @Delete('logout')
  logout(@Res ({ passthrough: true }) res : Response){
    return this.authService.logout(res);
  }
  
}
