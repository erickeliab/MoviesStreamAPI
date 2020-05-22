import { Injectable,HttpException , HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { userDto } from './DTO/userDto';
import { Users } from './user.entity';
import { userReg } from './DTO/userReg.Dto';
import { userLogin } from './DTO/userLogin.Dto';
import { Permission } from 'src/permissions/permission.entity';
import { Role } from 'src/roles/role.entity';
import { comparePasswords } from '../shared/utils';
import { toUserDto } from '../shared/mapper';


@Injectable()
export class UsersService {

    constructor ( 
        @InjectRepository(Users)
        private userRepository : Repository<Users>,
        private connection : Connection
    ){}


     async getall() : Promise<userDto[]> {
        
        return await this.userRepository.find();
    }

    async getOne(id : string) : Promise<userDto> {
        return this.userRepository.findOne(id);
    }

    async findByLogin({ Email , Password }: userLogin): Promise<userDto> {
        const user = await this.userRepository.findOne({ where: { Email } });
    
        if (!user) {
          throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
    
        // compare passwords
        const areEqual = await comparePasswords(user.Password, Password);
    
        if (!areEqual) {
          throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
    
        return toUserDto(user);
      }

      async findByPayload({ Email }: any): Promise<userDto> {
        return await this.userRepository.findOne({ where: { Email } });
      }


    async add(body : userReg) : Promise<Users>{
      const { Email } = body;
         // check if the user exists in the db
              
         const userInDb = await this.userRepository.findOne({ where: { Email } });
         if (userInDb) {
         throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
       }

        var role = new Role();
        role.Crud_actors = true;
        role.Crud_countries = true;
        role.Crud_directors = true;
        role.Crud_episodes = true;
        role.Crud_movies = true;
        role.Crud_seasons = true;
        role.Crud_users = true;
        role.Deleted = false;
        await this.connection.manager.save(role);

     

        var user = new Users();
                
        user.Name = body.Name;

        user.Phone = body.Phone;
        
        user.Email = body.Email;

        user.Password = body.Password;

        user.Verifymail = body.Verifymail;
        

        user.Deleted = body.Deleted;

     
         await this.userRepository.save(user);

         var permission = new Permission();
         permission.Name = 'Super Admin';
         permission.role = role;
         permission.Deleted = false;
         permission.User_id = user.User_id;
         permission.Role_id = role.Role_id;
         await this.connection.manager.save(permission);

         return await this.userRepository.findOne(user.User_id,{relations : ['permissions']});

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
