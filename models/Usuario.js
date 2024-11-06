const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define ( 'usuario', {
    idUsuario: {type: DataTypes.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING, allowNull:false},
    email: {type: DataTypes.STRING, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false},
} )

module.exports = usuario;


