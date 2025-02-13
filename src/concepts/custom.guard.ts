import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const isAuthorized = request.headers.authorization === 'secret';

    if (!isAuthorized) {
      throw new UnauthorizedException('Not allowed!!!!!');
    }
    return isAuthorized;
  }
}
