import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './DTO/createMovieDto';

import { from } from 'rxjs';


@Injectable()
export class MoviesService {

    constructor ( 
        @InjectRepository(Movie)
        private movieRepository : Repository<Movie>
    ){}


     async getall() : Promise<Movie[]> {
        return await this.movieRepository.find();
    }

    async getOne(id : Number) : Promise<Movie> {
        return this.movieRepository.findOne();
    }

    async add(body : CreateMovieDto) : Promise<Movie>{
         
        var movie = new Movie();
       
        movie.Name = body.Name;
        movie.Description = body.Description;
        movie.IMDB = body.IMDB;
        movie.User_id = body.User_id;
        movie.Link = body.Link;
        movie.Cover = body.Cover;
        movie.Photo = body.Photo;
        movie.Deleted = body.Deleted;
        return await this.movieRepository.save(movie);

    }

    async update(body : CreateMovieDto , id : string) : Promise<void>{

         const movie = this.movieRepository.findOne(id);

       await this.movieRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await movie).Name,
        Description : body.Description ? body.Description : (await movie).Description,
        IMDB : body.IMDB ? body.IMDB : (await movie).IMDB,
        User_id : body.User_id ? body.User_id : (await movie).User_id,
        Link : body.Link ? body.Link : (await movie).Link,
        Cover : body.Cover ? body.Cover : (await movie).Cover,
        Photo : body.Photo ? body.Photo : (await movie).Photo,
        Deleted : body.Deleted ? body.Deleted : (await movie).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.movieRepository.delete(id);
    }
}
