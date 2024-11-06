const express = require('express');
const router = express.Router();
const ContactoController = require('../controllers/ListaContactoController'); 


router.get('/', ContactoController.getAllContactos);
router.post('/', ContactoController.createContacto);
router.get('/:id', ContactoController.getContactoById);
router.put('/:id', ContactoController.updateContacto);
router.delete('/:id', ContactoController.deleteContacto);

module.exports = router;