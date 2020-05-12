import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { genreDto } from './DTO/genresDto';
import { Genre } from './genre.entity';


@Injectable()
export class GenresService {

    constructor ( 
        @InjectRepository(Genre)
        private genreRepository : Repository<Genre>
    ){}


     async getall() : Promise<Genre[]> {
        return await this.genreRepository.find();
    }

    async getOne(id : Number) : Promise<Genre> {
        return this.genreRepository.findOne();
    }

    async add(body : genreDto) : Promise<Genre>{
         
        var genre = new Genre();
        genre = body;
        return await this.genreRepository.save(genre);

    }

    async update(body : genreDto , id : string) : Promise<void>{

         const genre = this.genreRepository.findOne(id);

       await this.genreRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await genre).Name,

       
        Deleted : body.Deleted ? body.Deleted : (await genre).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.genreRepository.delete(id);
    }
   
}
