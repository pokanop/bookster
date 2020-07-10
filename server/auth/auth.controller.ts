import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'server/guards/auth.guard';

@Controller()
export class AuthController {
  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
