'use strict'
var express=require('express');
var router=express.Router();
var pastelController=require('../controllers/pastel.controller');
const pastel = require('../models/pastel');
var multiparty=require('connect-multiparty');
var multipartyMiddleWare=multiparty({uploadDir:'./uploads'});

// guardar tipo
router.post('/pastel',pastelController.guardarPastel);
// obtener tipo por nombre
router.get('/pastelN/:nombre',pastelController.obtenerPastelPorNombre)
router.get('/pastel/:id',pastelController.obtenerPastelPorId);
// obtener tipos
router.get('/pastel',pastelController.obtenerPasteles);
// actualizar tipo por nombre
router.put('/pastel',pastelController.actualizarPastelPorId);
// eliminar tipo por nombre
router.delete('/pastel/:id',pastelController.eliminarPastelPorId);
//agregar una imagen
router.post('/subir-imagen/:id',multipartyMiddleWare,pastelController.uploadImage);
//recuperar una imagen
router.get('/get-imagen/:imagen',pastelController.getImage);

module.exports=router;