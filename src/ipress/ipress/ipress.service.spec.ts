import { Test, TestingModule } from '@nestjs/testing';
import { IpressService } from './ipress.service';

describe('IpressService', () => {
  let service: IpressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpressService],
    }).compile();

    service = module.get<IpressService>(IpressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
