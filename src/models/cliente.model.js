const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
        nombre: String,
        user: String,
        password: String,
})

module.exports = model('usuarios', clienteSchema);