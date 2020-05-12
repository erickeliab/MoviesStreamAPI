import { Movie } from "src/movies/movies.entity";

export class countryDto{

    Country_id: number; 
    Name : string;
    Deleted : boolean;
    movies : Movie[];
}