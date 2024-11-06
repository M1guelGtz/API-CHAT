const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const usuario = require('./Usuario');
const chat = require('./Chat');

const UsuarioHasChat = sequelize.define('usuario_has_chat', {
  Usuario_idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: usuario,
      key: 'idUsuario',
    },
    primaryKey: true,
  },
  Chat_idChat: {
    type: DataTypes.INTEGER,
    references: {
      model: chat,
      key: 'idChat',
    },
    primaryKey: true,
  },
});

module.exports = UsuarioHasChat;
