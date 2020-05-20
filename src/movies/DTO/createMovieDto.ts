import { Country } from "src/countries/countries.entity";
import { Genre } from "src/genres/genre.entity";

export class CreateMovieDto{

    public readonly Movie_id : number; 
    public readonly Name : string; 
    public readonly Description : string; 
    public readonly IMDB : string; 
    public readonly User_id : number;
    public readonly Link : string; 
    public readonly Cover : string; 
    public readonly Photo : string; 
    public readonly Deleted : boolean; 
    public readonly country : Country;
    public readonly genres : Genre[];
   
}