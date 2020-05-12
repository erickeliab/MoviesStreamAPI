import { Repository } from 'typeorm';
import { directorDto } from './DTO/directorDTO';
import { Director } from './director.entity';
export declare class DirectorsService {
    private directorRepository;
    constructor(directorRepository: Repository<Director>);
    getall(): Promise<Director[]>;
    getOne(id: Number): Promise<Director>;
    add(body: directorDto): Promise<Director>;
    update(body: directorDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
