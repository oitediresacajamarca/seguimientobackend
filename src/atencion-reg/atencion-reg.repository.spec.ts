import { AtencionRegRepository } from './atencion-reg.repository';
import { EntityRepository } from 'typeorm';
import { AtencionRegEntity } from 'src/entidades/atencion-reg.entity';

describe('AtencionRegRepository', () => {
  it('should be defined', () => {
    expect(new AtencionRegRepository()).toBeDefined();
  });
});
