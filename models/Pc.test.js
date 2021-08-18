const Pc = require('./Pc.js');
const mockPc = {
    codigo: '32',
    alto: '41',
    ancho: '20',
    profundidad: '14',
    id: 6
};

describe('Testeando PcModels', () => {
    test('Pc', async () => {
        const instancia = await Pc.build(mockPc);

        expect(instancia).toHaveProperty('codigo', '32');
        expect(instancia).toHaveProperty('alto', '41');
        expect(instancia).toHaveProperty('ancho', '20');
        expect(instancia).toHaveProperty('profundidad', '14');
        expect(instancia).toHaveProperty('id', 6);
    })
})