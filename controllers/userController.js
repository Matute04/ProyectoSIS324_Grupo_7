const { createUser, getUserByUsername } = require('../models/userModel');

const registerUser = (req, res) => {
  const { username, password } = req.body;
  createUser(username, password, (err, userId) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    } else {
      res.status(201).json({ mensaje: 'Usuario creado con éxito' });
    }
  });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  
  getUserByUsername(username, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else if (!user) {
      res.status(404).json({ error: 'Nombre de usuario no encontrado' });
    } else if (user.password !== password) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
    } else {
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    }
  });
};

module.exports = { registerUser, loginUser };
