import {
    IsNotEmpty,
    IsEmail
} from 'class-validator';

export class userLogin{

    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    Password: string;

}

