import { seasonDto } from './DTO/seasonDto';
import { SeasonsService } from './seasons.service';
import { Season } from './seasons.entity';
export declare class SeasonsController {
    private readonly seasonsService;
    constructor(seasonsService: SeasonsService);
    getall(): Promise<Season[]>;
    getOne(id: any): Promise<Season>;
    add(body: seasonDto): Promise<Season>;
    update(body: seasonDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
