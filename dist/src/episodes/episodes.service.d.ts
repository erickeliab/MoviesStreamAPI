import { Repository } from 'typeorm';
import { episodeDto } from './DTO/episodeDto';
import { Episode } from './episode.entity';
export declare class EpisodesService {
    private episodeRepository;
    constructor(episodeRepository: Repository<Episode>);
    getall(): Promise<Episode[]>;
    getOne(id: Number): Promise<Episode>;
    add(body: episodeDto): Promise<Episode>;
    update(body: episodeDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
