

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