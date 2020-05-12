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
const movies_entity_1 = require("./movies.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MoviesService = class MoviesService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async getall() {
        return await this.movieRepository.find();
    }
    async getOne(id) {
        return this.movieRepository.findOne();
    }
    async add(body) {
        var movie = new movies_entity_1.Movie();
        movie.Name = body.Name;
        movie.Description = body.Description;
        movie.IMDB = body.IMDB;
        movie.User_id = body.User_id;
        movie.Link = body.Link;
        movie.Cover = body.Cover;
        movie.Photo = body.Photo;
        movie.Deleted = body.Deleted;
        return await this.movieRepository.save(movie);
    }
    async update(body, id) {
        const movie = this.movieRepository.findOne(id);
        await this.movieRepository.update(id, {
            Name: body.Name ? body.Name : (await movie).Name,
            Description: body.Description ? body.Description : (await movie).Description,
            IMDB: body.IMDB ? body.IMDB : (await movie).IMDB,
            User_id: body.User_id ? body.User_id : (await movie).User_id,
            Link: body.Link ? body.Link : (await movie).Link,
            Cover: body.Cover ? body.Cover : (await movie).Cover,
            Photo: body.Photo ? body.Photo : (await movie).Photo,
            Deleted: body.Deleted ? body.Deleted : (await movie).Deleted
        });
    }
    async remove(id) {
        await this.movieRepository.delete(id);
    }
};
MoviesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(movies_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map