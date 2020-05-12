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
const actors_entity_1 = require("./actors.entity");
let ActorsService = class ActorsService {
    constructor(actorRepository) {
        this.actorRepository = actorRepository;
    }
    async getall() {
        return await this.actorRepository.find();
    }
    async getOne(id) {
        return this.actorRepository.findOne();
    }
    async add(body) {
        var actor = new actors_entity_1.Actor();
        actor = body;
        return await this.actorRepository.save(actor);
    }
    async update(body, id) {
        const actor = this.actorRepository.findOne(id);
        await this.actorRepository.update(id, {
            Name: body.Name ? body.Name : (await actor).Name,
            Deleted: body.Deleted ? body.Deleted : (await actor).Deleted
        });
    }
    async remove(id) {
        await this.actorRepository.delete(id);
    }
};
ActorsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(actors_entity_1.Actor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map