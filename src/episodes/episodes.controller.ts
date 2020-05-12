import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {EpisodesService } from './episodes.service';
import { episodeDto } from './DTO/episodeDto';
import { Episode } from './episode.entity';

@Controller('episodes')
export class EpisodesController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly episodesService : EpisodesService){}

                    // get all the movies
                @Get()
                getall() : Promise<Episode[]> {
                    return this.episodesService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Episode> {
                    return this.episodesService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : episodeDto ): Promise<Episode> {
                return this.episodesService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : episodeDto, @Param('id') id ) : Promise<void> {
                    return this.episodesService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.episodesService.remove(param.id);
                }
}
