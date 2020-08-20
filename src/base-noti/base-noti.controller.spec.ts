import { Test, TestingModule } from '@nestjs/testing';
import { BaseNotiController } from './base-noti.controller';

describe('BaseNoti Controller', () => {
  let controller: BaseNotiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseNotiController],
    }).compile();

    controller = module.get<BaseNotiController>(BaseNotiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
