import { MedicamentoRepository } from './medicamento.repository';

describe('MedicamentoRepository', () => {
  it('should be defined', () => {
    expect(new MedicamentoRepository()).toBeDefined();
  });
});
