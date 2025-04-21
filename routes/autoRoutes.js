const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoController');

router.get('/', autoController.listarAutos);
router.get('/crear', autoController.mostrarFormularioCrear);
router.post('/crear', autoController.crearAuto);
router.get('/editar/:id', autoController.mostrarFormularioEditar);
router.post('/editar/:id', autoController.editarAuto);
router.get('/eliminar/:id', autoController.eliminarAuto);

module.exports = router;