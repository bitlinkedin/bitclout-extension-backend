import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IJwtPayload } from './passport/jwt.interface';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class JWTService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  createUserToken({ email, id }: UserEntity): any {
    const expiresIn = process.env.TOKEN_EXPIREC_IN || 36000000;

    const user: IJwtPayload = { email, id };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }

  verifyToken(token: string) {
    return this.jwtService.verify(token);
  }

  createToken() {
    return this.jwtService.sign({});
  }
}
