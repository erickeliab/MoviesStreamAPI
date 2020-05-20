import { Movie } from "src/movies/movies.entity";

export class genreDto{

    Genre_id: number; 
    Name : string;
    Deleted : boolean;
    movies : Movie[];
}