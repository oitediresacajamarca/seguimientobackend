import { Test, TestingModule } from '@nestjs/testing';
import { AtencionDiagnosticoService } from './atencion-diagnostico.service';

describe('AtencionDiagnosticoService', () => {
  let service: AtencionDiagnosticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionDiagnosticoService],
    }).compile();

    service = module.get<AtencionDiagnosticoService>(AtencionDiagnosticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
