import { RolesService } from './roles.service';
import { roleDto } from './DTO/roleDto';
import { Role } from './role.entity';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getall(): Promise<Role[]>;
    getOne(id: any): Promise<Role>;
    add(body: roleDto): Promise<Role>;
    update(body: roleDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
