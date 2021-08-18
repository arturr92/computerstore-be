const Cliente = require('./Cliente.js');
const mockCliente = {
    id: 1,
    apellido: 'Chico',
    nombre: 'Roberto',
    direccion: 'Corrientes 4744',
    dni: 223391,
    fecha_nacimiento: '2021-08-18T13:59:12.000Z',
    mail: 'correo@correo.com',
    telefono: 1131324458
};

describe('Testeando ClienteModels', () => {
    test('Cliente', async () => {
        const instancia = await Cliente.build(mockCliente);

        expect(instancia).toHaveProperty('id', 1);
        expect(instancia).toHaveProperty('apellido', 'Chico');
        expect(instancia).toHaveProperty('nombre', 'Roberto');
        expect(instancia).toHaveProperty('direccion', 'Corrientes 4744');
        expect(instancia).toHaveProperty('dni', 223391);
        expect(instancia).toHaveProperty('fecha_nacimiento', '2021-08-18T13:59:12.000Z');
        expect(instancia).toHaveProperty('mail', 'correo@corre.com');
        expect(instancia).toHaveProperty('telefono', 1131324458);
    })
})