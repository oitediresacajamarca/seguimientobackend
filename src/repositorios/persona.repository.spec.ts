import { PersonaRepository } from './persona.repository';

describe('PersonaRepository', () => {
  it('should be defined', () => {
    expect(new PersonaRepository()).toBeDefined();
  });
});
