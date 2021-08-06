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


const postProductos = async (req, res, next) => {
    console.log('reqqqqqq ', JSON.stringify(req.body))
    try {
        await Sucursal.create(req.body);
    } catch (error) {
        console.error(error);
        res.json({message: 'Error'})
    }
    res.json({message: 'Ok'})
    next();
};

const postCarrito = (req, res) => {
    res.send('Carrito')
};

const postOrden = (req, res) => {
    res.send('Orden de compra')
};

const postFactura = (req, res) => {
    res.send('Factura')
};

const postCliente = (req, res) => {
    res.send('cliente')
};

export {
    postProductos,
    postCarrito,
    postOrden,
    postFactura,
    postCliente
}