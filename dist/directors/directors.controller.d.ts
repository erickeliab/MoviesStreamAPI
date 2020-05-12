import { DirectorsService } from './directors.service';
import { directorDto } from './DTO/directorDTO';
import { Director } from './director.entity';
export declare class DirectorsController {
    private readonly directorsService;
    constructor(directorsService: DirectorsService);
    getall(): Promise<Director[]>;
    getOne(id: any): Promise<Director>;
    add(body: directorDto): Promise<Director>;
    update(body: directorDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
