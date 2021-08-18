const Microprocesador = require('./Microprocesador.js');
const mockMicroprocesador = {
    cache: '2.3',
    cantidad_hilos: '4',
    codigo: '13',
    velocidad: '3.5',
    fabricante: 'intel',
    id: 4,
};

describe('Testeando MicroprocesadorModels', () => {
    test('Microprocesador', async () => {
        const instancia = await Microprocesador.build(mockMicroprocesador);

        expect(instancia).toHaveProperty('cache', '2.3');
        expect(instancia).toHaveProperty('cantidad_hilos', '4');
        expect(instancia).toHaveProperty('codigo', '13');
        expect(instancia).toHaveProperty('velocidad', '3.5');
        expect(instancia).toHaveProperty('fabricante', 'intel');
        expect(instancia).toHaveProperty('id', 4);
    })
})