import { Test, TestingModule } from '@nestjs/testing';
import { AtencionRegController } from './atencion-reg.controller';

describe('AtencionReg Controller', () => {
  let controller: AtencionRegController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionRegController],
    }).compile();

    controller = module.get<AtencionRegController>(AtencionRegController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
