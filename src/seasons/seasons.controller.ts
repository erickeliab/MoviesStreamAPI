import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import { seasonDto } from './DTO/seasonDto';
import { SeasonsService } from './seasons.service';
import { Season } from './seasons.entity';

@Controller('seasons')
export class SeasonsController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly seasonsService : SeasonsService){}

                    // get all the movies
                @Get()
                getall() : Promise<Season[]> {
                    return this.seasonsService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Season> {
                    return this.seasonsService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : seasonDto ): Promise<Season> {
                return this.seasonsService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : seasonDto, @Param('id') id ) : Promise<void> {
                    return this.seasonsService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.seasonsService.remove(param.id);
                }
}
