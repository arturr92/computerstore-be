import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Factura = db.define('factura', {
    fecha: Sequelize.DATE,
    numero: Sequelize.DECIMAL,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    clienteId: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
}, {tableName: 'factura'});