import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionGeograficaService } from './distribucion-geografica.service';

describe('DistribucionGeograficaService', () => {
  let service: DistribucionGeograficaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistribucionGeograficaService],
    }).compile();

    service = module.get<DistribucionGeograficaService>(DistribucionGeograficaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
