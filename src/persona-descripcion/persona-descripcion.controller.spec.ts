import { Test, TestingModule } from '@nestjs/testing';
import { PersonaDescripcionController } from './persona-descripcion.controller';

describe('PersonaDescripcion Controller', () => {
  let controller: PersonaDescripcionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaDescripcionController],
    }).compile();

    controller = module.get<PersonaDescripcionController>(PersonaDescripcionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
