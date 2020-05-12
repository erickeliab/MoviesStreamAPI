import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { countryDto } from './DTO/countryDto';
import { Country } from './countries.entity';

import { from } from 'rxjs';


@Injectable()
export class CountriesService {

    constructor ( 
        @InjectRepository(Country)
        private countryRepository : Repository<Country>
    ){}


     async getall() : Promise<Country[]> {
        return await this.countryRepository.find();
    }

    async getOne(id : Number) : Promise<Country> {
        return this.countryRepository.findOne();
    }

    async add(body : countryDto) : Promise<Country>{
         
        var actor = new Country();
        actor = body;
        return await this.countryRepository.save(actor);

    }

    async update(body : countryDto , id : string) : Promise<void>{

         const country = this.countryRepository.findOne(id);

       await this.countryRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await country).Name,
       
        Deleted : body.Deleted ? body.Deleted : (await country).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.countryRepository.delete(id);
    }
   
}
