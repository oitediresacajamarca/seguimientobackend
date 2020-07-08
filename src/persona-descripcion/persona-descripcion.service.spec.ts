import { Test, TestingModule } from '@nestjs/testing';
import { PersonaDescripcionService } from './persona-descripcion.service';

describe('PersonaDescripcionService', () => {
  let service: PersonaDescripcionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaDescripcionService],
    }).compile();

    service = module.get<PersonaDescripcionService>(PersonaDescripcionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
