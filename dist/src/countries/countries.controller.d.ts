import { CountriesService } from './countries.service';
import { countryDto } from './DTO/countryDto';
import { Country } from './countries.entity';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    getall(): Promise<Country[]>;
    getOne(id: any): Promise<Country>;
    add(body: countryDto): Promise<Country>;
    update(body: countryDto, id: any): Promise<void>;
    remove(param: any): Promise<void>;
}
