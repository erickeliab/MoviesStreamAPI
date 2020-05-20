import { Movie } from "src/movies/movies.entity";

export class directorDto {
  
  Director_id: number;

  Name : string; 

  Deleted : boolean; 

  movies : Movie[];
}
