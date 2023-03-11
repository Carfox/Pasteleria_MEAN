'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pastelSchema=Schema({
    nombre:String,
    sabor:String,
    tamanio:String,
    porciones:String,
    precio:Number,
    imagen:String
});

module.exports=mongoose.model('Pastel',pastelSchema);