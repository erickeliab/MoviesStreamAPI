import { Repository } from 'typeorm';
import { roleDto } from './DTO/roleDto';
import { Role } from './role.entity';
export declare class RolesService {
    private RoleRepository;
    constructor(RoleRepository: Repository<Role>);
    getall(): Promise<Role[]>;
    getOne(id: Number): Promise<Role>;
    add(body: roleDto): Promise<Role>;
    update(body: roleDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
