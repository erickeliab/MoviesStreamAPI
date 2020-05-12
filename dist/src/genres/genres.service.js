"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const genre_entity_1 = require("./genre.entity");
let GenresService = class GenresService {
    constructor(genreRepository) {
        this.genreRepository = genreRepository;
    }
    async getall() {
        return await this.genreRepository.find();
    }
    async getOne(id) {
        return this.genreRepository.findOne();
    }
    async add(body) {
        var genre = new genre_entity_1.Genre();
        genre = body;
        return await this.genreRepository.save(genre);
    }
    async update(body, id) {
        const genre = this.genreRepository.findOne(id);
        await this.genreRepository.update(id, {
            Name: body.Name ? body.Name : (await genre).Name,
            Deleted: body.Deleted ? body.Deleted : (await genre).Deleted
        });
    }
    async remove(id) {
        await this.genreRepository.delete(id);
    }
};
GenresService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(genre_entity_1.Genre)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GenresService);
exports.GenresService = GenresService;
//# sourceMappingURL=genres.service.js.map