import { CreateMovieDto } from "./DTO/createMovieDto";
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getall(): Promise<Movie[]>;
    getOne(id: any): Promise<Movie>;
    add(body: CreateMovieDto): Promise<Movie>;
    update(body: CreateMovieDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
