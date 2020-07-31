import { Test, TestingModule } from '@nestjs/testing';
import { IpressCarteraController } from './ipress-cartera.controller';

describe('IpressCartera Controller', () => {
  let controller: IpressCarteraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpressCarteraController],
    }).compile();

    controller = module.get<IpressCarteraController>(IpressCarteraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
