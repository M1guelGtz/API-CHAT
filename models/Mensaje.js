const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const chat = require('./Chat')


const Mensaje = sequelize.define ('mensaje',{
    idMensaje: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    id_chat: { type: DataTypes.INTEGER, references: { model: chat, key: 'idChat'} },
    hora: {type: DataTypes.STRING, allowNull: false} ,
    fecha: {type: DataTypes.STRING, allowNull: false },
    estatus:{type: DataTypes.TINYINT, allowNull: false},
    mensaje: {type: DataTypes.TEXT, allowNull: false},
    id_usuario: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = Mensaje;
