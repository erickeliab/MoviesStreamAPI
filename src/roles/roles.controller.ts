import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {RolesService } from './roles.service';
import { roleDto } from './DTO/roleDto';
import { Role } from './role.entity';

@Controller('roles')
export class RolesController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly rolesService : RolesService){}

                    // get all the movies
                @Get()
                getall() : Promise<Role[]> {
                    return this.rolesService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Role> {
                    return this.rolesService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : roleDto ): Promise<Role> {
                return this.rolesService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : roleDto, @Param('id') id ) : Promise<void> {
                    return this.rolesService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.rolesService.remove(param.id);
                }
}
