import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'server/guards/auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return this.authService.logout(req.user);
  }

  @Post('register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(AuthGuard)
  @Post('deregister')
  async deregister(@Request() req) {
    return this.authService.deregister(req.user);
  }
}
