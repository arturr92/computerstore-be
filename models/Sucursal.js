const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Sucursal = db.define('sucursal', {
    direccion: Sequelize.STRING,
    email: Sequelize.STRING,
    telefono: Sequelize.DECIMAL,
    ciudad: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    sucursal_Id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
}, {tableName: 'sucursal'});

module.exports = Sucursal;