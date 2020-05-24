import { UsuarioSchema } from './usuario.schema';

describe('UsuarioSchema', () => {
  it('should be defined', () => {
    expect(new UsuarioSchema()).toBeDefined();
  });
});
