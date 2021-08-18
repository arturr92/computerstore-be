const Placa_video = require('./Placa_video.js');
const mockPlaca_video = {
    chipset: 'h310',
    modelo: 'gigabyte',
    velocidad: '3.2',
    capacidad: '4.1',
    fabricante: 'amd',
    id: 9
};

describe('Testeando Placa_videoModels', () => {
    test('Placa_video', async () => {
        const instancia = await Placa_video.build(mockPlaca_video);

        expect(instancia).toHaveProperty('chipset', 'h310');
        expect(instancia).toHaveProperty('modelo', 'gigabyte');
        expect(instancia).toHaveProperty('velocidad', '3.2');
        expect(instancia).toHaveProperty('capacidad', '4.1');
        expect(instancia).toHaveProperty('fabricante', 'amd');
        expect(instancia).toHaveProperty('id', 9)
    })
})