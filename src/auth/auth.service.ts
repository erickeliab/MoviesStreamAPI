import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { userReg } from '../users/DTO/userReg.Dto';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { UsersService } from '../users/users.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { userLogin } from '../users/DTO/userLogin.Dto';
import { userDto } from '../users/DTO/userDto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: userReg): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.add(user);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async login(loginUserDto: userLogin): Promise<any> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);
    const toke = 'wewewe';

    return {
      Email: user.Email,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<userDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ Email }: userDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const user: JwtPayload = { Email : Email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
