import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Microprocesador = db.define('microprocesador', {
    cache:   Sequelize.STRING,
    cantidad_hilos: Sequelize.DECIMAL,
    codigo: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
}, { tableName: 'microprocesador'});