import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable,  HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from '../users/DTO/userDto';
import { JwtPayload } from './interfaces/payload.interface';
import { Keys } from '../config/key';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: Keys.jwsecret,
        });  
    }
    
    async validate(payload: JwtPayload): Promise<userDto> {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }    
        return user;  
    }
}