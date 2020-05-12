import { Movie } from 'src/movies/movies.entity';
export declare class Season {
    Season_id: number;
    Name: string;
    Number: string;
    Deleted: boolean;
    movie: Movie;
}
