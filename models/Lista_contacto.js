const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const usuario = require('./Usuario');

const lista_c = sequelize.define('lista_contacto', {
  idLista_Contacto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Usuario_idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: usuario,
      key: 'idUsuario',
    },
  },
});

module.exports = lista_c;
