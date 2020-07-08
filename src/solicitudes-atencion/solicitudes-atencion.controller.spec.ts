import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesAtencionController } from './solicitudes-atencion.controller';

describe('SolicitudesAtencion Controller', () => {
  let controller: SolicitudesAtencionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudesAtencionController],
    }).compile();

    controller = module.get<SolicitudesAtencionController>(SolicitudesAtencionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
