import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Keys } from '../config/key';
import { JwtStrategy } from './jwt.strategy';
@Module({

    imports: [
        UsersModule,
        PassportModule.register({
          defaultStrategy: 'jwt',
          property: 'user',
          session: false,
        }),
        JwtModule.register({
          secret: Keys.jwsecret,
          signOptions: {
            expiresIn: Keys.expireTime,
          },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
      exports: [PassportModule, JwtModule],

})
export class AuthModule {}
