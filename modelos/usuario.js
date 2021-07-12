const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: { type: String},
    contrasena: { type: String}
});

module.exports = model('Usuario', UsuarioSchema);