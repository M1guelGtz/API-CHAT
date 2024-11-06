const Chat = require('../models/Chat');

exports.getAllChats = async (req, res) => {
    try {
        const chat = await Chat.findAll();
        res.json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getChatById = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (chat) {
            res.json(chat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createChat = async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateChat = async (req, res) => {
    try {
        const updated = await Chat.update(req.body, { where: { idChat: req.params.id } });
        if (updated) {
            const updatedChat = await Chat.findByPk(req.params.id);
            res.json(updatedChat);
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteChat = async (req, res) => {
    try {
        const deleted = await Chat.destroy({ where: { idChat: req.params.id } });
        if (deleted) {
            res.json({ message: "Chat eliminado" });
        } else {
            res.status(404).json({ error: "Chat no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
