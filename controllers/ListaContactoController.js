const Contacto = require('../models/Lista_contacto');

exports.getAllContactos = async (req, res) => {
    try {
        const contactos = await Contacto.findAll();
        res.json(contactos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getContactoById = async (req, res) => {
    try {
        const contacto = await Contacto.findAll({ where : {id_usuario: req.params.id }});
        if (contacto) {
            res.json(contacto);
        } else {
            res.status(404).json({ error: "Contacto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createContacto = async (req, res) => {
    try {
        const contacto = await Contacto.create({
            id_usuario: req.body.id_usuario,
            Usuario_idUsuario: req.body.Usuario_idUsuario,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.status(201).json(contacto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContacto = async (req, res) => {
    try {
        const updated = await Contacto.update(req.body, { where: { idLista_Contacto: req.params.id } });
        if (updated[0] > 0) {
            const updatedContacto = await Contacto.findByPk(req.params.id);
            res.json(updatedContacto);
        } else {
            res.status(404).json({ error: "Contacto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteContacto = async (req, res) => {
    try {
        const deleted = await Contacto.destroy({ where: { idLista_Contacto: req.params.id } });
        if (deleted) {
            res.json({ message: "Contacto eliminado" });
        } else {
            res.status(404).json({ error: "Contacto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
