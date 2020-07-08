import { PacienteRepository } from './paciente.repository';

describe('PacienteRepository', () => {
  it('should be defined', () => {
    expect(new PacienteRepository()).toBeDefined();
  });
});
