import { Country } from 'src/countries/countries.entity';
import { Season } from 'src/seasons/seasons.entity';
export declare class Movie {
    Movie_id: number;
    Name: string;
    Description: string;
    IMDB: string;
    User_id: number;
    Link: string;
    Cover: string;
    Photo: string;
    Deleted: boolean;
    country: Country;
    seasons: Season[];
}
