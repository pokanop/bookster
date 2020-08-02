import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'server/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    if (req && req.body && req.body.username && req.body.password) {
      return this.checkUser(req);
    } else if (req && req.body && req.headers.authorization) {
      return this.checkToken(req);
    } else {
      return false;
    }
  }

  async checkUser(req: any): Promise<boolean> {
    req.user = await this.authService.validateUser(
      req.body.username,
      req.body.password
    );
    return req.user;
  }

  async checkToken(req: any): Promise<boolean> {
    req.user = await this.authService.validateToken(req.headers.authorization);
    if (!req.user) {
      throw new UnauthorizedException();
    }
    return req.user;
  }
}
