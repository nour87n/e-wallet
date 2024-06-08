import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';


@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {
    
  }
  @Get('check-balance')
  getCheckBalance(@Body("user") user: any) {
    return this.accountService.getCheckBalance(user);
  }

  @Post('add-balance')
  addBalance(@Body('user') user : any, @Body('addBalance') addBalance: number) {
    return this.accountService.addBalance(user, addBalance);
  }

  @Post('transfer')
  transfer(@Body('user') user: any,@Body('receiver') receiver: any, @Body('amount') amount: number) {
    return this.accountService.transfer(user,receiver, amount);
  }
}
