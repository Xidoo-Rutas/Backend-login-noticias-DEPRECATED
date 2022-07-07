const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
        nombre: String,
        user: String,
        password: String,
        // img_titulo: {type:file},
        // img_publicacion: {type:file}

        // nombre_responsable: String,
        // email: String,
        // categoria: String,
        // Titulo: String,
        // descripccion: String,
        // descripccion_dos: String,
})

module.exports = model('usuarios', clienteSchema);