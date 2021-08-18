const Carritocliente = require('./Carritocliente.js');
const mockCarritocliente = {
    id: 1,
    orden_Id: 2,
    componentes_ID: 3
};

describe('Testeando CarritoclienteModels', () => {
    test('Carritocliente', async () => {
        const instancia = await Carritocliente.build(mockCarritocliente);

        expect(instancia).toHaveProperty('id', 1);
        expect(instancia).toHaveProperty('orden_Id', 2);
        expect(instancia).toHaveProperty('componentes_ID', 3);
    })
})