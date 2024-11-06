const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');

router.get('/', UsuariosController.getUsuario);
router.get('/:id', UsuariosController.getUsuarioById);
router.post('/', UsuariosController.createUsuario);
router.put('/:id', UsuariosController.updateUsuario);
router.delete('/:id', UsuariosController.deleteUsuario);

module.exports = router;
