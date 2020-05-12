import { Test, TestingModule } from '@nestjs/testing';
import { SeasonsController } from './seasons.controller';

describe('Seasons Controller', () => {
  let controller: SeasonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeasonsController],
    }).compile();

    controller = module.get<SeasonsController>(SeasonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
