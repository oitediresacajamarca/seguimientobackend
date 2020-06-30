import { Test, TestingModule } from '@nestjs/testing';
import { TratamientoController } from './tratamiento.controller';

describe('Tratamiento Controller', () => {
  let controller: TratamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TratamientoController],
    }).compile();

    controller = module.get<TratamientoController>(TratamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
