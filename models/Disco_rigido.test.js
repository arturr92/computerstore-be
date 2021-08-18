const Disco_rigido = require('./Disco_rigido.js');
const mockDisco_rigido = {
    codigo: '312',
    tipo: 'ssd',
    capacidad: '512gb',
    velocidad: '3.2',
    fabricante: 'asus',
    id: 1
};

describe('Testeando Disco_rigidoModels', () => {
    test('Disco_rigido', async () => {
        const instancia = await Disco_rigido.build(mockDisco_rigido);

        expect(instancia).toHaveProperty('codigo', '312');
        expect(instancia).toHaveProperty('tipo', 'ssd');
        expect(instancia).toHaveProperty('capacidad', '512gb');
        expect(instancia).toHaveProperty('velocidad', '3.2');
        expect(instancia).toHaveProperty('fabricante', 'asus');
        expect(instancia).toHaveProperty('id', 1);
    })
})