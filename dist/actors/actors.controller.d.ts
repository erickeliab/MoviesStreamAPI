import { ActorsService } from './actors.service';
import { actorDto } from './DTO/actorDto';
import { Actor } from './actors.entity';
export declare class ActorsController {
    private readonly actorsService;
    constructor(actorsService: ActorsService);
    getall(): Promise<Actor[]>;
    getOne(id: any): Promise<Actor>;
    add(body: actorDto): Promise<Actor>;
    update(body: actorDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
