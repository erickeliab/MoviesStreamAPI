import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { directorDto } from './DTO/directorDTO';
import { Director } from './director.entity';

import { from } from 'rxjs';


@Injectable()
export class DirectorsService {

    constructor ( 
        @InjectRepository(Director)
        private directorRepository : Repository<Director>
    ){}


     async getall() : Promise<Director[]> {
        return await this.directorRepository.find();
    }

    async getOne(id : Number) : Promise<Director> {
        return this.directorRepository.findOne();
    }

    async add(body : directorDto) : Promise<Director>{
         
        var director = new Director();
        director = body;
        return await this.directorRepository.save(director);

    }

    async update(body : directorDto , id : string) : Promise<void>{

         const director = this.directorRepository.findOne(id);

       await this.directorRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await director).Name,
       
        Deleted : body.Deleted ? body.Deleted : (await director).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.directorRepository.delete(id);
    }
   
}
