import express from 'express';
import {
    getInicio,
    getProductos,
    postProductos,
    getCarrito,
    postCarrito,
    putCarrito,
    deleteCarrito,
    detalleProducto,
    getOrden,
    postOrden,
    putOrden,
    deleteOrden,
    getFactura,
    postFactura,
    putFactura,
    deleteFactura,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
} from '../controllers/pathControllers.js';

const router = express.Router();


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



export default router;