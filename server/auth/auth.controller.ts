import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'server/guards/auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
