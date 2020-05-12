import { Movie } from '../movies/movies.entity';
export declare class Country {
    Country_id: number;
    Name: string;
    Deleted: boolean;
    movies: Movie[];
}
