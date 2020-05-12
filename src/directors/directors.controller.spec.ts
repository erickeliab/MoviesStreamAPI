import { Test, TestingModule } from '@nestjs/testing';
import { DirectorsController } from './directors.controller';

describe('Directors Controller', () => {
  let controller: DirectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectorsController],
    }).compile();

    controller = module.get<DirectorsController>(DirectorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
