const Memoria_ram = require('./Memoria_ram.js');
const mockMemoria_ram = {
    codigo: '123',
    tipo: 'ddr4',
    capacidad: '8gb',
    velocidad: '3.2',
    fabricante: 'asus',
    id: 2
}; 

describe('Testeando Memoria_ramModels', () => {
    test('Memoria_ram', async () => {
        const instancia = await Memoria_ram.build(mockMemoria_ram);

        expect(instancia).toHaveProperty('codigo', '123');
        expect(instancia).toHaveProperty('tipo', 'ddr4');
        expect(instancia).toHaveProperty('capacidad', '8gb');
        expect(instancia).toHaveProperty('velocidad', '3.2');
        expect(instancia).toHaveProperty('fabricante', 'asus');
        expect(instancia).toHaveProperty('id', 2);
    })
})