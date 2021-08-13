const Accesorio = require('./Accesorio.js');
const mockAccesorio = {
  codigo: 123,
  descripcion: 'accesorio test',
  id: 456,
};

describe('Testeando AccesorioModels', () => {
    test('Accesorio', async () => {
        const instancia = await Accesorio.build(mockAccesorio);

        expect(instancia).toHaveProperty('codigo', 123);
        expect(instancia).toHaveProperty('descripcion', 'accesorio test');
        expect(instancia).toHaveProperty('id', 456);
    })
})