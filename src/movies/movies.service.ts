import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateMovieDto } from './DTO/createMovieDto';

import { from } from 'rxjs';
import { Genre } from 'src/genres/genre.entity';
import { GenresService } from 'src/genres/genres.service';


@Injectable()
export class MoviesService {

    constructor ( 
        
        @InjectRepository(Movie)
        private movieRepository : Repository<Movie>,
        private connection : Connection, private genreSer : GenresService
    ){}


     async getall() : Promise<Movie[]> {
        return await this.movieRepository.find();
    }

    async getOne(id : Number) : Promise<Movie> {
        return this.movieRepository.findOne();
    }

    async add(body : CreateMovieDto) : Promise<Movie>{
        
        const genre1 = new Genre();
        genre1.Name = 'Adventure';
        this.genreSer.add(genre1);

        var movie = new Movie();
       
        movie.Name = body.Name;
        movie.Description = body.Description;
        movie.IMDB = body.IMDB;
        movie.User_id = body.User_id;
        movie.Link = body.Link;
        movie.Cover = body.Cover;
        movie.Photo = body.Photo;
        movie.Deleted = body.Deleted;
        movie.genres = [genre1];
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
