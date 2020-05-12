import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { roleDto } from './DTO/roleDto';
import { Role } from './role.entity';

import { from } from 'rxjs';


@Injectable()
export class RolesService {

    constructor ( 
        @InjectRepository(Role)
        private RoleRepository : Repository<Role>
    ){}


     async getall() : Promise<Role[]> {
        return await this.RoleRepository.find();
    }

    async getOne(id : Number) : Promise<Role> {
        return this.RoleRepository.findOne();
    }

    async add(body : roleDto) : Promise<Role>{
         
        var role = new Role();
        role.Crud_users = body.Crud_users;
      
        role.Crud_movies = body.Crud_movies;
      
        role.Crud_seasons = body.Crud_seasons;

        role.Crud_episodes = body.Crud_episodes; 
      
        role.Crud_countries = body.Crud_countries;

        role.Crud_actors = body.Crud_actors;
      
        role.Crud_directors = body.Crud_directors;
      
        role.Deleted = body.Deleted;
        
        return await this.RoleRepository.save(role);

    }

    async update(body : roleDto , id : string) : Promise<void>{

         const role = this.RoleRepository.findOne(id);

       await this.RoleRepository.update(id,
        {
 

        Crud_users : body.Crud_users ? body.Crud_users : (await role).Crud_users, 
      
        Crud_movies :body.Crud_movies ? body.Crud_movies : (await role).Crud_movies, 
      
        Crud_seasons : body.Crud_seasons ? body.Crud_seasons : (await role).Crud_seasons, 

        Crud_episodes : body.Crud_episodes ? body.Crud_episodes : (await role).Crud_episodes,  
      
        Crud_countries : body.Crud_countries ? body.Crud_countries : (await role).Crud_countries, 
      
        Crud_actors : body.Crud_actors ? body.Crud_actors : (await role).Crud_actors, 
      
        Crud_directors : body.Crud_directors ? body.Crud_directors : (await role).Crud_directors, 
      
        Deleted : body.Deleted ? body.Deleted : (await role).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.RoleRepository.delete(id);
    }
   
}
