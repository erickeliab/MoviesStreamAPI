import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDto } from './DTO/userDto';
import { User } from './user.entity';

import { from } from 'rxjs';
import { users } from './userdata';


@Injectable()
export class UsersService {

    constructor ( 
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){}


     async getall() : Promise<User[]> {
        
        return await this.userRepository.find();
    }

    async getOne(id : Number) : Promise<User> {
        return this.userRepository.findOne();
    }

    async add(body : userDto) : Promise<User>{
       

        var user = new User();
                
        user.Name = body.Name;

        user.Phone= body.Phone;
        
        user.Email= body.Email;

        user.Password = body.Password;

        user.Verifymail= body.Verifymail;

        user.Deleted = body.Deleted;
        
        return await this.userRepository.save(user);

    }

    async update(body : userDto , id : string) : Promise<void>{

         const user = this.userRepository.findOne(id);

       await this.userRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await user).Name,
       
        Phone: body.Phone ? body.Phone : (await user).Phone,
        
        Email: body.Email ? body.Email : (await user).Email,
       
        Deleted : body.Deleted ? body.Deleted : (await user).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.userRepository.delete(id);
    }
   
}
