import { PermissionsService } from './permissions.service';
import { permissionDto } from './DTO/permissionDto';
import { Permission } from './permission.entity';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    getall(): Promise<Permission[]>;
    getOne(id: any): Promise<Permission>;
    add(body: permissionDto): Promise<Permission>;
    update(body: permissionDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
