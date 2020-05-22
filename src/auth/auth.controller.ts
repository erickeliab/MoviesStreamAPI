import {
    Controller,
    Body,
    Post,
    HttpException,
    HttpStatus 
} from '@nestjs/common';
import { AuthService } from "./auth.service";
import { userReg } from '../users/DTO/userReg.Dto';
import { userLogin } from '../users/DTO/userLogin.Dto'
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: 
        AuthService) {}


    @Post('register')  
    public async register(@Body() createUserDto: userReg,  ): Promise<RegistrationStatus> {    
    const result: 
    RegistrationStatus = await this.authService.register(createUserDto,);
    if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);    
    }
    return result;  
}


@Post('login')  
public async login(@Body() loginUserDto: userLogin): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);  
}

}
