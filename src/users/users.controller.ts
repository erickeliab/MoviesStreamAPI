import { Controller, Get, Post,Put ,Delete, Param,Body } from '@nestjs/common';
import {UsersService } from './users.service';
import { userDto } from './DTO/userDto';
import { Users } from './user.entity';
import { userReg } from './DTO/userReg.Dto';


@Controller('users')
export class UsersController {

    //GET ALL THE SEASON
     // dependency injection
     constructor (private readonly usersService : UsersService){}

                    // get all the movies
                @Get()
                getall() : Promise<userDto[]> {
                    return this.usersService.getall();
                }
                
                
                // get a single movie
                @Get('/:id')
                getOne( @Param('id') id):Promise<userDto> {
                    return this.usersService.getOne(id);
                }
                
                // add movie
                @Post()
                add(@Body() body : userReg ): Promise<Users> {
                return this.usersService.add(body);
                }
                
                
                //update movie
                @Put(':id')
                update(@Body() body : userDto, @Param('id') id ) : Promise<void> {
                    return this.usersService.update(body,id);
                
                } 
                
                //delete a movie
                @Delete(':id')
                remove(@Param() param) : Promise<void> {
                    return this.usersService.remove(param.id);
                }
}
