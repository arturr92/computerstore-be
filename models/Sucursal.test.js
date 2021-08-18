const Sucursal = require('./Sucursal.js');
const mockSucursal = {
    direccion: 'Corrientes 4381',
    email: 'corre@corre.com',
    telefono: '44881382',
    ciudad: 'Buenos Aires',
    id: 6,
    sucursal_Id: 1
};

describe('Testeando SucursalModels', () => {
    test('Sucursal', async () => {
        const instancia = await Sucursal.build(mockSucursal);

        expect(instancia).toHaveProperty('direccion', 'Corrientes 4381');
        expect(instancia).toHaveProperty('email', 'corre@corre.com');
        expect(instancia).toHaveProperty('telefono', '44881382');
        expect(instancia).toHaveProperty('ciudad', 'Buenos Aires');
        expect(instancia).toHaveProperty('id', 6);
        expect(instancia).toHaveProperty('sucursal_Id', 1);
    })
})