const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Cliente = db.define('cliente', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    apellido: Sequelize.STRING,
    nombre: Sequelize.STRING,
    direccion: Sequelize.STRING,
    dni: Sequelize.DECIMAL,
    fecha_nacimiento: Sequelize.DATE,
    mail: Sequelize.STRING,
    telefono: Sequelize.INTEGER,
}, {tableName: 'cliente'});

module.exports = Cliente;