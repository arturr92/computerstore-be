import { Microprocesador,
    Cliente, 
    Memoria_ram, 
    Placa_video, 
    Disco_rigido, 
    Carritocliente, 
    Accesorio, 
    Factura, 
    Orden_de_compra, 
    Pc, 
    Sucursal } 
    from '../models/indexModels.js';

const deleteCarrito = (req, res) => {
    res.send('Carrito')
};

const deleteOrden = (req, res) => {
    res.send('Orden de compra')
};

const deleteFactura = (req, res) => {
    res.send('Factura')
};

const deleteCliente = (req, res) => {
    res.send('cliente')
};


export {
    deleteCarrito,
    deleteOrden,
    deleteFactura,
    deleteCliente
}