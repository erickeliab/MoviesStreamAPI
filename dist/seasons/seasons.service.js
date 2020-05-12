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
const seasons_entity_1 = require("./seasons.entity");
let SeasonsService = class SeasonsService {
    constructor(seasonRepository) {
        this.seasonRepository = seasonRepository;
    }
    async getall() {
        return await this.seasonRepository.find();
    }
    async getOne(id) {
        return this.seasonRepository.findOne();
    }
    async add(body) {
        var season = new seasons_entity_1.Season();
        season.Name = body.Name;
        season.Number = body.Number;
        season.Deleted = body.Deleted;
        return await this.seasonRepository.save(season);
    }
    async update(body, id) {
        const season = this.seasonRepository.findOne(id);
        await this.seasonRepository.update(id, {
            Name: body.Name ? body.Name : (await season).Name,
            Number: body.Number ? body.Number : (await season).Number,
            Deleted: body.Deleted ? body.Deleted : (await season).Deleted
        });
    }
    async remove(id) {
        await this.seasonRepository.delete(id);
    }
};
SeasonsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(seasons_entity_1.Season)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeasonsService);
exports.SeasonsService = SeasonsService;
//# sourceMappingURL=seasons.service.js.map