import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Orden_de_compra = db.define('orden_de_compra', {
    fecha: Sequelize.DATE,
    numero: Sequelize.DECIMAL,
    precio: Sequelize.DECIMAL,
    cantidad: Sequelize.DECIMAL,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    factura_Id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
}, {tableName: 'orden_de_compra'});