import { GenresService } from './genres.service';
import { genreDto } from './DTO/genresDto';
import { Genre } from './genre.entity';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    getall(): Promise<Genre[]>;
    getOne(id: any): Promise<Genre>;
    add(body: genreDto): Promise<Genre>;
    update(body: genreDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
