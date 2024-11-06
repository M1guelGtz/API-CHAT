const express = require('express');
const sequelize = require('./config/database');
const ChatsRoutes = require('./routes/Chats');
const MensajesRoutes = require('./routes/Mensajes');
const UsuariosRoutes = require('./routes/Usuarios');
const ContactosRoutes = require('./routes/Contactos')
const UsChat = require('./routes/UsChat')
const cors = require('cors');
const app = express();
app.use(express.json());  
app.use(cors({ origin: 'http://localhost:4200'}))

app.use('/api/chats', ChatsRoutes);
app.use('/api/mensajes', MensajesRoutes);
app.use('/api/usuarios', UsuariosRoutes);
app.use('/api/contatos', ContactosRoutes);
app.use('/api/uschat', UsChat)

sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(error => console.error('Unable to connect to the database:', error));
