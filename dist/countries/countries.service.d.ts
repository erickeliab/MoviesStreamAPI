import { Repository } from 'typeorm';
import { countryDto } from './DTO/countryDto';
import { Country } from './countries.entity';
export declare class CountriesService {
    private countryRepository;
    constructor(countryRepository: Repository<Country>);
    getall(): Promise<Country[]>;
    getOne(id: Number): Promise<Country>;
    add(body: countryDto): Promise<Country>;
    update(body: countryDto, id: string): Promise<void>;
    remove(id: string): Promise<void>;
}
