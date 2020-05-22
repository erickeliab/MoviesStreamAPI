import {
    IsNotEmpty,
    IsEmail
} from 'class-validator';

export class userReg{

    @IsNotEmpty()
    User_id: number; 

    @IsNotEmpty()
    Name : string;

    @IsNotEmpty()
    Phone: string;

    @IsNotEmpty()
    Password: string;

    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsEmail()
    Verifymail: string;
    
    Deleted : boolean;
}

