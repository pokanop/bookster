import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export type Session = any;

@Injectable()
export class AuthService {
  private sessions = new Map<string, Session>();

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log(`validating username: ${username} password: ${password}`);
    const user = await this.usersService.findBy(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateToken(token: string): Promise<any> {
    console.log(`validating token: ${token}`);
    const payload = this.jwtService.verify(token);
    console.log(payload);
    const session = this.sessions.get(payload.uid);
    const user = await this.usersService.findOne(session.user.id);
    if (!session || !user) {
      throw UnauthorizedException;
    }
    return user;
  }

  async login(user: any): Promise<any> {
    console.log(`logging in ${user.username} (${user.id})`);
    const payload = { usr: user.username, uid: user.id };
    const token = this.jwtService.sign(payload);
    this.sessions.set(user.id, { user: user, token: token });

    return {
      status: 'logged in',
      access_token: token,
    };
  }

  async logout(user: any): Promise<any> {
    console.log(`logging out ${user.username} (${user.id})`);
    this.sessions.delete(user.id);

    return {
      status: 'logged out',
    };
  }
}
