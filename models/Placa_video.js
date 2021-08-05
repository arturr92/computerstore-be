import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Placa_video = db.define('placa_video', {
    chipset: Sequelize.STRING,
    modelo: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    capacidad: Sequelize.STRING, 
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
}, {tableName: 'placa_video'});