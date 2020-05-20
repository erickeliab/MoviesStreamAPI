import { Movie } from "src/movies/movies.entity";

export class actorDto{

    Actor_id: number; 
    Name : string;
    Deleted : boolean;
    movies : Movie[];
}