const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/ChatController'); 


router.get('/', ChatController.getAllChats);
router.post('/', ChatController.createChat);
router.get('/:id', ChatController.getChatById);
router.put('/:id', ChatController.updateChat);
router.delete('/:id', ChatController.deleteChat);

module.exports = router;
