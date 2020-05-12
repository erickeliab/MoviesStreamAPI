import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {CountriesService } from './countries.service';
import { countryDto } from './DTO/countryDto';
import { Country } from './countries.entity';

@Controller('countries')
export class CountriesController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly countriesService : CountriesService){}

                    // get all the movies
                @Get()
                getall() : Promise<Country[]> {
                    return this.countriesService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Country> {
                    return this.countriesService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : countryDto ): Promise<Country> {
                return this.countriesService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : countryDto, @Param('id') id ) : Promise<void> {
                    return this.countriesService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.countriesService.remove(param.id);
                }
}
