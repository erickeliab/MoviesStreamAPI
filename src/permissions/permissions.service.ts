import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { permissionDto } from './DTO/permissionDto';
import { Permission } from './permission.entity';

import { from } from 'rxjs';


@Injectable()
export class PermissionsService {

    constructor ( 
        @InjectRepository(Permission)
        private permissionRepository : Repository<Permission>
    ){}


     async getall() : Promise<Permission[]> {
        return await this.permissionRepository.find();
    }

    async getOne(id : Number) : Promise<Permission> {
        return this.permissionRepository.findOne();
    }

    async add(body : permissionDto) : Promise<Permission>{
         
        var permission = new Permission();
        permission.Name = body.Name;
        permission.Deleted = body.Deleted ;
        
        return await this.permissionRepository.save(permission);

    }

    async update(body : permissionDto , id : string) : Promise<void>{

         const permission = this.permissionRepository.findOne(id);

       await this.permissionRepository.update(id,
        {
            
        Name : body.Name ? body.Name : (await permission).Name,
        Deleted : body.Deleted ? body.Deleted : (await permission).Deleted
        
        } );
        

    }

    async remove(id: string) : Promise<void>{

         await this.permissionRepository.delete(id);
    }
   
}
