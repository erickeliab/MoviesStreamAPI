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
const episode_entity_1 = require("./episode.entity");
let EpisodesService = class EpisodesService {
    constructor(episodeRepository) {
        this.episodeRepository = episodeRepository;
    }
    async getall() {
        return await this.episodeRepository.find();
    }
    async getOne(id) {
        return this.episodeRepository.findOne();
    }
    async add(body) {
        var episode = new episode_entity_1.Episode();
        episode = body;
        return await this.episodeRepository.save(episode);
    }
    async update(body, id) {
        const episode = this.episodeRepository.findOne(id);
        await this.episodeRepository.update(id, {
            Name: body.Name ? body.Name : (await episode).Name,
            Number: body.Number ? body.Number : (await episode).Number,
            Link: body.Link ? body.Link : (await episode).Link,
            Deleted: body.Deleted ? body.Deleted : (await episode).Deleted
        });
    }
    async remove(id) {
        await this.episodeRepository.delete(id);
    }
};
EpisodesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(episode_entity_1.Episode)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EpisodesService);
exports.EpisodesService = EpisodesService;
//# sourceMappingURL=episodes.service.js.map