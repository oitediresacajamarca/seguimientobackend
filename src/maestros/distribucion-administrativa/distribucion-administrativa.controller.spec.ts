import { Test, TestingModule } from '@nestjs/testing';
import { DistribucionAdministrativaController } from './distribucion-administrativa.controller';

describe('DistribucionAdministrativa Controller', () => {
  let controller: DistribucionAdministrativaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribucionAdministrativaController],
    }).compile();

    controller = module.get<DistribucionAdministrativaController>(DistribucionAdministrativaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
