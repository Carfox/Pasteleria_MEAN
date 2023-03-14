'use strict'
var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');
const DB_URI = 'mongodb://20.42.112.173:27017/pasteleria';
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos Azure');
  })
  .catch((error) => {
    console.log('Error al conectar a la base de datos:', error.message);
  });