import { EpisodesService } from './episodes.service';
import { episodeDto } from './DTO/episodeDto';
import { Episode } from './episode.entity';
export declare class EpisodesController {
    private readonly episodesService;
    constructor(episodesService: EpisodesService);
    getall(): Promise<Episode[]>;
    getOne(id: any): Promise<Episode>;
    add(body: episodeDto): Promise<Episode>;
    update(body: episodeDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
