import { Test, TestingModule } from '@nestjs/testing';
import { CpmsFullController } from './cpms-full.controller';

describe('CpmsFull Controller', () => {
  let controller: CpmsFullController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpmsFullController],
    }).compile();

    controller = module.get<CpmsFullController>(CpmsFullController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
