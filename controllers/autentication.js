const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Usuario'); // Ajusta la ruta según tu estructura de proyecto
const auth = express.Router();

const JWT_SECRET = 'your_jwt_secret'; // Cambia esto por un secreto seguro

// Ruta de registro
auth.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ username, password: hashedPassword });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
    
auth.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
