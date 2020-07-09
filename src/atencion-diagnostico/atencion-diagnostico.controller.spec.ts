import { Test, TestingModule } from '@nestjs/testing';
import { AtencionDiagnosticoController } from './atencion-diagnostico.controller';

describe('AtencionDiagnostico Controller', () => {
  let controller: AtencionDiagnosticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionDiagnosticoController],
    }).compile();

    controller = module.get<AtencionDiagnosticoController>(AtencionDiagnosticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
