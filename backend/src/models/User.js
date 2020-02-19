const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        Nombre: String,
        Apellido1: String,
        Apellido2: String,
        Perfil: String
        
    });

module.exports = model('User', userSchema);