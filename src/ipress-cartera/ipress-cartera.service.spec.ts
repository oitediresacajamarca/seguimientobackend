import { Test, TestingModule } from '@nestjs/testing';
import { IpressCarteraService } from './ipress-cartera.service';

describe('IpressCarteraService', () => {
  let service: IpressCarteraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpressCarteraService],
    }).compile();

    service = module.get<IpressCarteraService>(IpressCarteraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
