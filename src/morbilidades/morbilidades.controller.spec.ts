import { Test, TestingModule } from '@nestjs/testing';
import { MorbilidadesController } from './morbilidades.controller';

describe('Morbilidades Controller', () => {
  let controller: MorbilidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorbilidadesController],
    }).compile();

    controller = module.get<MorbilidadesController>(MorbilidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
