import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { seasonDto } from './DTO/seasonDto';
import { Season } from './seasons.entity';

import { from } from 'rxjs';


@Injectable()
export class SeasonsService {

    constructor ( 
        @InjectRepository(Season)
        private seasonRepository : Repository<Season>
    ){}


     async getall() : Promise<Season[]> {
        return await this.seasonRepository.find();
    }

    async getOne(id : Number) : Promise<Season> {
        return this.seasonRepository.findOne();
    }

    async add(body : seasonDto) : Promise<Season>{
         
        var season = new Season();
        

        season.Name = body.Name;
        

        season.Number = body.Number;
       
        season.Deleted = body.Deleted;
        return await this.seasonRepository.save(season);

    }

    async update(body : seasonDto , id : string) : Promise<void>{

         const season = this.seasonRepository.findOne(id);

       await this.seasonRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await season).Name,
        

        Number : body.Number ? body.Number : (await season).Number,
       
        Deleted : body.Deleted ? body.Deleted : (await season).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.seasonRepository.delete(id);
    }
   
}
