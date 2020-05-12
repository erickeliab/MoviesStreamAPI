import { Season } from 'src/seasons/seasons.entity';
export declare class Episode {
    Episode_id: number;
    Name: string;
    Number: number;
    Link: string;
    Deleted: boolean;
    season: Season;
}
