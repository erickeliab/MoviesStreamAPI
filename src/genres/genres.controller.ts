import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {GenresService } from './genres.service';
import { genreDto } from './DTO/genresDto';
import { Genre } from './genre.entity';

@Controller('genres')
export class GenresController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly genresService : GenresService){}

                    // get all the movies
                @Get()
                getall() : Promise<Genre[]> {
                    return this.genresService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Genre> {
                    return this.genresService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : genreDto ): Promise<Genre> {
                return this.genresService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : genreDto, @Param('id') id ) : Promise<void> {
                    return this.genresService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.genresService.remove(param.id);
                }
}
