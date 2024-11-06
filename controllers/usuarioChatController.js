const UsuarioHasChat = require('../models/usuario_has_chat');

exports.getAllUsChat = async (req, res) => {
    try {
        const uschat = await UsuarioHasChat.findAll();
        res.json(uschat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsChatById = async (req, res) => {
    try {
        const uschat = await UsuarioHasChat.findAll({ where: { Usuario_idUsuario: req.params.id } });
        if (uschat.length > 0) {
            res.json(uschat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getUsPertenecToChat = async (req, res) => {
    try {
        const uschat = await UsuarioHasChat.findAll({ where: { Chat_idChat: req.params.id } });
        if (uschat.length > 0) {
            res.json(uschat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUsuarioChat = async (req, res) => {
    try {
        const { Usuario_idUsuario, Chat_idChat } = req.body;
        const uschat = await UsuarioHasChat.create({ Usuario_idUsuario, Chat_idChat });
        res.status(201).json(uschat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUsChat = async (req, res) => {
    try {
        const updated = await UsuarioHasChat.update(req.body, { where: { Chat_idChat: req.params.id } });
        if (updated[0] > 0) {
            const updatedChat = await UsuarioHasChat.findByPk(req.params.id);
            res.json(updatedChat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUsChat = async (req, res) => {
    try {
        const deleted = await UsuarioHasChat.destroy({ where: { Chat_idChat: req.params.id } });
        if (deleted) {
            res.json({ message: "Chat eliminado" });
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
