import { Movie } from './movies.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './DTO/createMovieDto';
export declare class MoviesService {
    private movieRepository;
    constructor(movieRepository: Repository<Movie>);
    getall(): Promise<Movie[]>;
    getOne(id: Number): Promise<Movie>;
    add(body: CreateMovieDto): Promise<Movie>;
    update(body: CreateMovieDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
