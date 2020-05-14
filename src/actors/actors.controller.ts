import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { actorDto } from './DTO/actorDto';
import { Actor } from './actors.entity';

@Controller('actors')
export class ActorsController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly actorsService : ActorsService){}

                    // get all the movies
                @Get()
                getall() : Promise<Actor[]> {
                    return this.actorsService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Actor> {
                    return this.actorsService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : actorDto ): Promise<Actor> {
                return this.actorsService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : actorDto, @Param('id') id ) : Promise<void> {
                    return this.actorsService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.actorsService.remove(param.id);
                }

                
}
