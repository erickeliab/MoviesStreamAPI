import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { actorDto } from './DTO/actorDto';
import { Actor } from './actors.entity';

import { from } from 'rxjs';


@Injectable()
export class ActorsService {

    constructor ( 
        @InjectRepository(Actor)
        private actorRepository : Repository<Actor>
    ){}


     async getall() : Promise<Actor[]> {
        return await this.actorRepository.find();
    }

    async getOne(id : Number) : Promise<Actor> {
        return this.actorRepository.findOne();
    }

    async add(body : actorDto) : Promise<Actor>{
         
        var actor = new Actor();
        actor = body;
        return await this.actorRepository.save(actor);

    }

    async update(body : actorDto , id : string) : Promise<void>{

         const actor = this.actorRepository.findOne(id);

       await this.actorRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await actor).Name,
       
        Deleted : body.Deleted ? body.Deleted : (await actor).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.actorRepository.delete(id);
    }
   
}
