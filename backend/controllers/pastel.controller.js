'use strict'
var fs=require('fs');
const path=require('path');
var Pastel=require('../models/pastel');
const session = require('express-session');

var controller={
    guardarPastel:function(req,res){
        var pastel=new Pastel();
        pastel.nombre=req.body.nombre;
        pastel.sabor=req.body.sabor;
        pastel.tamanio=req.body.tamanio;
        pastel.porciones=req.body.porciones;
        pastel.precio=req.body.precio;
        pastel.imagen=null;
        pastel.save()
                .then(result=>{
                    if(!result) return res.status(404).send({message:"No se han podido guardar los datos"});
                    return res.status(200).send({result});
                })
                .catch(err=>{
                    console.log(err);
                });        
    },
    obtenerPastelPorNombre:function(req,res){
        var nombreBuscar=req.params.nombre;
        Pastel.findOne({nombre:nombreBuscar})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    obtenerPasteles:function(req,res){
        Pastel.find({}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    actualizarPastelPorId:function(req,res){
        var pastel=req.body;
        Pastel.findByIdAndUpdate(req.body._id,pastel,{new:true})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se han podido actualizar los datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    eliminarPastelPorId:function(req,res){
        var idBuscar=req.params.id;
        Pastel.findOneAndDelete(idBuscar)
        .then(result => {
            if (!result) return res.status(404).send({message:'No se pudo eliminar el registro'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    uploadImage:function(req,res){
        var idPastel=req.params.id;
        var fileName='Imagen no subida';

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Pastel.findByIdAndUpdate(idPastel,{imagen:fileName},{new:true})
                .then(result => {
                    if (!result) return res.status(404).send({message:'No se pueden actualizar los datos'});
                    return res.status(200).send({result});
                })
                .catch(err => {
                    return res.status(200).send({message:'Error al actualizar los datos'});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension no es valida'});
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImage:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if (exists){
                return  res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:"La imagen no existe"});
            }
        })
    }
}

module.exports=controller;