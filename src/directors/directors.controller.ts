import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {DirectorsService } from './directors.service';
import { directorDto } from './DTO/directorDTO';
import { Director } from './director.entity';

@Controller('directors')
export class DirectorsController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly directorsService : DirectorsService){}

                    // get all the movies
                @Get()
                getall() : Promise<Director[]> {
                    return this.directorsService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Director> {
                    return this.directorsService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : directorDto ): Promise<Director> {
                return this.directorsService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : directorDto, @Param('id') id ) : Promise<void> {
                    return this.directorsService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.directorsService.remove(param.id);
                }
}
