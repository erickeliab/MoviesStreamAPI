import { Repository } from 'typeorm';
import { seasonDto } from './DTO/seasonDto';
import { Season } from './seasons.entity';
export declare class SeasonsService {
    private seasonRepository;
    constructor(seasonRepository: Repository<Season>);
    getall(): Promise<Season[]>;
    getOne(id: Number): Promise<Season>;
    add(body: seasonDto): Promise<Season>;
    update(body: seasonDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
