import { Test, TestingModule } from '@nestjs/testing';
import { DirectorsService } from './directors.service';

describe('DirectorsService', () => {
  let service: DirectorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectorsService],
    }).compile();

    service = module.get<DirectorsService>(DirectorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
