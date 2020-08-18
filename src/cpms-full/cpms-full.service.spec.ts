import { Test, TestingModule } from '@nestjs/testing';
import { CpmsFullService } from './cpms-full.service';

describe('CpmsFullService', () => {
  let service: CpmsFullService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpmsFullService],
    }).compile();

    service = module.get<CpmsFullService>(CpmsFullService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
