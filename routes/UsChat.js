const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/usuarioChatController'); 

router.get('/', ChatController.getAllUsChat);
router.get('/usuario/:id/pertenece', ChatController.getUsPertenecToChat);
router.post('/', ChatController.createUsuarioChat);
router.get('/:id', ChatController.getUsChatById);
router.put('/:id', ChatController.updateUsChat);
router.delete('/:id', ChatController.deleteUsChat);

// Nueva ruta para obtener chats por ID de usuario
router.get('/usuario/:id/chats', ChatController.getUsChatById);

module.exports = router;
