const {
    Microprocesador,
    Cliente, 
    Memoria_ram, 
    Placa_video, 
    Disco_rigido, 
    Carritocliente, 
    Accesorio, 
    Factura, 
    Orden_de_compra, 
    Pc, 
    Sucursal
} = require('../models/indexModels.js');

const putCarrito = (req, res) => {
    res.send('Carrito')
};

const putOrden = (req, res) => {
    res.send('Orden de compra')
};

const putFactura = (req, res) => {
    res.send('Factura')
};


const putCliente = (req, res) => {
    res.send('cliente')
};

module.exports = {
    putCarrito,
    putOrden,
    putFactura,
    putCliente
}
