import { UsersService } from './users.service';
import { userDto } from './DTO/userDto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getall(): Promise<User[]>;
    getOne(id: any): Promise<User>;
    add(body: userDto): Promise<User>;
    update(body: userDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
