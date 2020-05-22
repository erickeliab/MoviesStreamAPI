import { 
        Controller,
        Get , 
        Post,
        Put,
        Delete,
        Param , 
        Body , 
        UseGuards,
        Headers
     } from '@nestjs/common';
import { CreateMovieDto } from "./DTO/createMovieDto";
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('movies')
export class MoviesController {

    // dependency injection
    constructor (private readonly moviesService : MoviesService){}

    // get all the movies
@Get()
getall() : Promise<Movie[]> {
    return this.moviesService.getall();
}


// get a single movie
@Get('/:id')
getOne( @Param('id') id):Promise<Movie> {
    return this.moviesService.getOne(id);
}

// add movie
 @UseGuards(AuthGuard())
@Post()
add(@Body() body : CreateMovieDto , @Headers() headers): Promise<Movie> {

console.log(headers);
return this.moviesService.add(body);
}


//update movie
@Put(':id')
update(@Body() body : CreateMovieDto, @Param('id') id ) : Promise<void> {
    return this.moviesService.update(body,id);

} 

//delete a movie
@Delete(':id')
remove(@Param() param) : Promise<void> {
    return this.moviesService.remove(param.id);
}
}
