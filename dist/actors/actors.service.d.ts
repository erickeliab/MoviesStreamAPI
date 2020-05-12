import { Repository } from 'typeorm';
import { actorDto } from './DTO/actorDto';
import { Actor } from './actors.entity';
export declare class ActorsService {
    private actorRepository;
    constructor(actorRepository: Repository<Actor>);
    getall(): Promise<Actor[]>;
    getOne(id: Number): Promise<Actor>;
    add(body: actorDto): Promise<Actor>;
    update(body: actorDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
