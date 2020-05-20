import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateMovieDto } from './DTO/createMovieDto';
import { Genre } from 'src/genres/genre.entity';
import { Country } from 'src/countries/countries.entity';
import { Director } from 'src/directors/director.entity';
import { Actor } from 'src/actors/actors.entity';
import { Season } from 'src/seasons/seasons.entity';
import { Episode } from 'src/episodes/episode.entity';



@Injectable()
export class MoviesService {

    constructor ( 
        
        @InjectRepository(Movie)
        private movieRepository : Repository<Movie>,
        private connecton : Connection
        
    ){}


     async getall() : Promise<Movie[]> {
        return await this.movieRepository.find();
    }

    async getOne(id : string) : Promise<Movie> {
        return this.movieRepository.findOneOrFail(id,{relations:['country','genres']});
    }

    async add(body : any ) : Promise<any>{
        
       var genre1 = new Genre();
       genre1.Name = 'Action';
       await this.connecton.manager.save(genre1);

       var director = new Director();
       director.Name = "The Duff Brothers";
       await this.connecton.manager.save(director);

       var actor = new Actor();
       actor.Name = 'Scott Artkins'
       await this.connecton.manager.save(actor);

       var episode = new Episode();
       episode.Link = 'https://localhost:3000/movies/episode.mkv';
       episode.Name = 'The Revange';
       episode.Number = 1;
       await this.connecton.manager.save(episode);

       var season = new Season();
       season.Name = 'Season One';
       season.Number = '1';
       season.episodes = [episode];
       await this.connecton.manager.save(season);
       

        var country = new Country();
        country.Name = 'USA';
        await this.connecton.manager.save(country);

        var movie = new Movie();
       
        movie.Name = body.Name;
        movie.Description = body.Description;
        movie.IMDB = body.IMDB;
        movie.User_id = body.User_id;
        movie.Link = body.Link;
        movie.Cover = body.Cover;
        movie.Photo = body.Photo;
        movie.actors = [actor];
        movie.directors = [director];
        movie.seasons = [season];
        movie.genres = [genre1];
        movie.country = country;
        movie.Deleted = body.Deleted;
       
        return await this.connecton.manager.save(movie);
         
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
