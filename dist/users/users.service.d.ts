import { Repository } from 'typeorm';
import { userDto } from './DTO/userDto';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getall(): Promise<User[]>;
    getOne(id: Number): Promise<User>;
    add(body: userDto): Promise<User>;
    update(body: userDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
