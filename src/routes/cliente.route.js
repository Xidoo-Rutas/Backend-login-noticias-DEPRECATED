const { Router } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente} = require('../controllers/cliente.controller')
const router = Router();


router.get('/api/usuarios', consultarclientes);
router.post('/api/usuarios/registro', agregarclientes);
router.put('/api/usuarios/modificar', modificarcliente);
router.delete('/api/usuarios/eliminar/:id', eliminarcliente);



module.exports = router;