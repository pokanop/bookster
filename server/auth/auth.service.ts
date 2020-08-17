import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

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
    const user = await this.usersService.findBy(username).catch((e) => {
      throw e;
    });
    if (user && user.password === password) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async validateUserId(userId: string): Promise<any> {
    console.log(`validating userId: ${userId}`);
    const session = this.sessions.get(userId);
    if (!session) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.findOne(session.user.id).catch((e) => {
      throw e;
    });
    if (!user) {
      throw new UnauthorizedException();
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

  async register(user: any): Promise<any> {
    console.log(`registering user ${user.username}`);
    const result = await this.usersService
      .create(user.username, user.password)
      .catch((e) => {
        console.log(e);
        throw new BadRequestException();
      });
    console.log(`result: ${JSON.stringify(result)}`);
    return result;
  }

  async deregister(user: any): Promise<any> {
    console.log(`deregistering user ${user.username}`);
    const result = await this.usersService.destroy(user.username);
    console.log(`result: ${JSON.stringify(result)}`);
    return result;
  }
}
