import { Test, TestingModule } from '@nestjs/testing';
import { FuatController } from './fuat.controller';

describe('Fuat Controller', () => {
  let controller: FuatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuatController],
    }).compile();

    controller = module.get<FuatController>(FuatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
