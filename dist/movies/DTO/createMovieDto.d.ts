import { Country } from "src/countries/countries.entity";
export declare class CreateMovieDto {
    readonly Movie_id: number;
    readonly Name: string;
    readonly Description: string;
    readonly IMDB: string;
    readonly User_id: number;
    readonly Link: string;
    readonly Cover: string;
    readonly Photo: string;
    readonly Deleted: boolean;
    readonly country: Country;
}
