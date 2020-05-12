import { Repository } from 'typeorm';
import { genreDto } from './DTO/genresDto';
import { Genre } from './genre.entity';
export declare class GenresService {
    private genreRepository;
    constructor(genreRepository: Repository<Genre>);
    getall(): Promise<Genre[]>;
    getOne(id: Number): Promise<Genre>;
    add(body: genreDto): Promise<Genre>;
    update(body: genreDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
