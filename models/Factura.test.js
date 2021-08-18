const Factura = require('./Factura.js');
const mockFactura = {
    fecha: '2021-18-08',
    numero: '2393',
    id: 2,
    clienteId: 3
};

describe('Testeando FacturaModels', () => {
    test('Factura', async () => {
        const instancia = await Factura.build(mockFactura);

        expect(instancia).toHaveProperty('fecha', '2021-18-08');
        expect(instancia).toHaveProperty('numero', '2393');
        expect(instancia).toHaveProperty('id', 2);
        expect(instancia).toHaveProperty('clienteId', 3);
    })
})