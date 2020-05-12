import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { episodeDto } from './DTO/episodeDto';
import { Episode } from './episode.entity';

import { from } from 'rxjs';


@Injectable()
export class EpisodesService {

    constructor ( 
        @InjectRepository(Episode)
        private episodeRepository : Repository<Episode>
    ){}


     async getall() : Promise<Episode[]> {
        return await this.episodeRepository.find();
    }

    async getOne(id : Number) : Promise<Episode> {
        return this.episodeRepository.findOne();
    }

    async add(body : episodeDto) : Promise<Episode>{
         
        var episode = new Episode();
        episode.Name = body.Name;
        episode.Number =  body.Number;
        episode.Link = body.Link;
        episode.Deleted = body.Deleted;
        return await this.episodeRepository.save(episode);

    }

    async update(body : episodeDto , id : string) : Promise<void>{

         const episode = this.episodeRepository.findOne(id);

       await this.episodeRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await episode).Name,

        Number :  body.Number ? body.Number : (await episode).Number,
  
        Link : body.Link ? body.Link : (await episode).Link,
       
        Deleted : body.Deleted ? body.Deleted : (await episode).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.episodeRepository.delete(id);
    }
   
}
