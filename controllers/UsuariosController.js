const Usuario = require('../models/Usuario');

exports.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: "usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateUsuario = async (req, res) => {
    try {
        const updated = await Usuario.update(req.body, { where: { 
            idUsuario: req.params.id, 
            nombre: req.params.nombre ,
            email: req.params.email ,
        } });
        if (updated) {
            const updatedUsuario = await Usuario.findByPk(req.params.id);
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ error: "usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const deleted = await Usuario.destroy({ where: { idUsuario: req.params.id } });
        if (deleted) {
            res.json({ message: "usuario eliminado" });
        } else {
            res.status(404).json({ error: "usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};
