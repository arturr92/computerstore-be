const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Factura = db.define('factura', {
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

module.exports = Factura;