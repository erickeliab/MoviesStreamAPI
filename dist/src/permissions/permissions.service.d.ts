import { Repository } from 'typeorm';
import { permissionDto } from './DTO/permissionDto';
import { Permission } from './permission.entity';
export declare class PermissionsService {
    private permissionRepository;
    constructor(permissionRepository: Repository<Permission>);
    getall(): Promise<Permission[]>;
    getOne(id: Number): Promise<Permission>;
    add(body: permissionDto): Promise<Permission>;
    update(body: permissionDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
