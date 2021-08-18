const { Router } = require('express')
const router = Router();

const {
    getInicio,
    getProductos,
    getCarrito,
    detalleProducto,
    getOrden,
    getFactura,
    getCliente,
} = require('../controllers/getControllers.js');

const { 
    postProductos,
    postCarrito,
    postOrden,
    postFactura,
    postCliente
} = require('../controllers/postControllers.js');

const {
    putCarrito,
    putOrden,
    putFactura,
    putCliente,
} = require('../controllers/putControllers.js');

const {
    deleteCarrito,
    deleteOrden,
    deleteFactura,
    deleteCliente
} = require('../controllers/deleteControllers.js');


router.get('/', getInicio);
router.get('/productos', getProductos);
router.post('/productos', postProductos);
router.get('/carrito', getCarrito);
router.put('/carrito', putCarrito);
router.post('/carrito', postCarrito);
router.delete('/carrito', deleteCarrito);
router.get('/productos/:id', detalleProducto);
router.get('/orden_de_compra', getOrden);
router.post('/orden_de_compra', postOrden);
router.put('/orden_de_compra', putOrden);
router.delete('/orden_de_compra', deleteOrden);
router.get('/factura', getFactura);
router.post('/factura', postFactura);
router.put('/factura', putFactura);
router.delete('/factura', deleteFactura);
router.get('/cliente', getCliente);
router.post('/cliente', postCliente);
router.put('/cliente', putCliente);
router.delete('/cliente', deleteCliente);


module.exports = router;