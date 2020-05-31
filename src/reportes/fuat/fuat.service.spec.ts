import { Test, TestingModule } from '@nestjs/testing';
import { FuatService } from './fuat.service';

describe('FuatService', () => {
  let service: FuatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuatService],
    }).compile();

    service = module.get<FuatService>(FuatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
