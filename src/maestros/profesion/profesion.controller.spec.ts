import { Test, TestingModule } from '@nestjs/testing';
import { ProfesionController } from './profesion.controller';

describe('Profesion Controller', () => {
  let controller: ProfesionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesionController],
    }).compile();

    controller = module.get<ProfesionController>(ProfesionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
