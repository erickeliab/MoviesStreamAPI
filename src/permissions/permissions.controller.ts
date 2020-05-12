import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {PermissionsService } from './permissions.service';
import { permissionDto } from './DTO/permissionDto';
import { Permission } from './permission.entity';

@Controller('permissions')
export class PermissionsController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly permissionsService : PermissionsService){}

                    // get all the movies
                @Get()
                getall() : Promise<Permission[]> {
                    return this.permissionsService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<Permission> {
                    return this.permissionsService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : permissionDto ): Promise<Permission> {
                return this.permissionsService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : permissionDto, @Param('id') id ) : Promise<void> {
                    return this.permissionsService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.permissionsService.remove(param.id);
                }
}
