const Mensaje = require('../models/Mensaje');

exports.getMensajes = async (req, res) => {
    try {
        const mensaje = await Mensaje.findAll();
        res.json(mensaje);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMensajeById = async (req, res) => {
    try {
        const mensajes = await Mensaje.findAll({ where: { id_chat: req.params.id } })
        if (mensajes) {
            res.json(mensajes);
        } else {
            res.status(404).json({ error: "mensaje no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createMensaje = async (req, res) => {
    try {
        const mensaje = await Mensaje.create(req.body);
        res.status(201).json(mensaje);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMensaje = async (req, res) => {
    try {
        const updated = await Mensaje.update(req.body, { where: { idMensaje: req.params.id } });
        if (updated) {
            const updatedMensaje = await Mensaje.findByPk(req.params.id);
            res.json(updatedMensaje);
        } else {
            res.status(404).json({ error: "Mensaje no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletemensaje = async (req, res) => {
    try {
        const deleted = await Mensaje.destroy({ where: { idMensaje: req.params.id } });
        if (deleted) {
            res.json({ message: "mensaje eliminado" });
        } else {
            res.status(404).json({ error: "mensaje no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
