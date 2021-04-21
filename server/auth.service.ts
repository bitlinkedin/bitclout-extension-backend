import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { IJwtPayload } from './passport/jwt.interface';
import { JWTService } from './jwt.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JWTService,
  ) {}

  private readonly logger = new Logger(AuthService.name);

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findByEmail(username);
    if (!user) {
      throw new HttpException(`User doesn't exist`, HttpStatus.OK);
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      throw new HttpException(`Invalid password`, HttpStatus.OK);
    }

    const { password, ...result } = user;
    return result;
  }

  async comparePassword(attempt: string, dbPassword: string): Promise<boolean> {
    return await bcrypt.compare(attempt, dbPassword);
  }

  validateUserToken(payload: IJwtPayload): Promise<any> {
    return this.userService.findById(payload.id);
  }

  async login(loginUserDto: any): Promise<any> {
    const user = await this.userService.findByEmail(loginUserDto.email);
    if (!user) {
      throw new HttpException(`User doesn't exist`, HttpStatus.OK);
    }
    const token = this.jwtService.createUserToken(user);

    return {
      user,
      token,
    };
  }
}
