import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Cliente = db.define('cliente', {
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