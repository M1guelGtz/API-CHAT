const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chat = sequelize.define('chat', {
    idChat: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    ultimo_msj : { type: DataTypes.TEXT, allowNull: false}
})  
module.exports = Chat  
