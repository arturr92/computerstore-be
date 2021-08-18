const Orden_de_compra = require('./Orden_de_compra.js');
const mockOrden_de_compra = {
    fecha: 2021-18-8,
    numero: '221',
    precio: '205',
    cantidad: '32',
    id: 3,
    factura_Id: 21
};

describe('Testeando Orden_de_compraModels', () => {
    test('Orden_de_compra', async () => {
        const instancia = await Orden_de_compra.build(mockOrden_de_compra);

        expect(instancia).toHaveProperty('fecha', 2021-18-8);
        expect(instancia).toHaveProperty('numero', '221');
        expect(instancia).toHaveProperty('precio', '205');
        expect(instancia).toHaveProperty('cantidad', '32');
        expect(instancia).toHaveProperty('id', 3);
        expect(instancia).toHaveProperty('facutra_Id', 21);
    })
})