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

const getInicio = (req, res) => {
    res.send('Inicio')
};
const getProductos = (req, res) => {
    res.send('Productos')
};
const getCarrito = (req, res) => {
    res.send('Carrito')
};
const getOrden = (req, res) => {
    res.send('Orden de compra')
};
const getFactura = (req, res) => {
    res.send('Factura')
};
const getCliente = (req, res) => {
    res.send('cliente')
};
const detalleProducto = (req, res) => {
    res.send('ProductosDetalle')
};


export {
    getInicio,
    getProductos,
    getCarrito,
    getOrden,
    getFactura,
    getCliente,
    detalleProducto
}