import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesAtencionService } from './solicitudes-atencion.service';

describe('SolicitudesAtencionService', () => {
  let service: SolicitudesAtencionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudesAtencionService],
    }).compile();

    service = module.get<SolicitudesAtencionService>(SolicitudesAtencionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
