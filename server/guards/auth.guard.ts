import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
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
    } else if (req && req.body && req.body.token) {
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
    console.log(req.user);
    return req.user;
  }

  async checkToken(req: any): Promise<boolean> {
    req.user = await this.authService.validateToken(req.body.token);
    console.log(req.user);
    return req.user;
  }
}
