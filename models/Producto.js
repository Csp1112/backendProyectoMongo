//para acceder al modulo 
const mongoose = require('mongoose');

//el modelo que vamos a implementar debe ser el mismo a la base de datos 
const productoSchema = mongoose.Schema({ //esquema de cómo va a estar el documento de nuestro producto -> metodo Schema
    //se construye un JSON, el modelo
    nombre:{
        type: String, //tipo de dato
        required: true //si el campo es obligatorio (true) o no (false)
    },

    marca:{
        type: String, 
        required: true 
    },

    codigo:{
        type: Number, 
        required: true
    }, 

    proveedor:{
        type: String,
        required: true
    },

    precio:{
        type: Number,
        required: true
    },

},{versionkey:false}); //cuando se hace consulta en Mongo, a veces aparece versión, por eso se debe quitar con 'false'


//Exportar el documento 
module.exports = mongoose.model('Producto',productoSchema); //se exporta el modelo, el nombre del modelo y el esquema que se va a utilizar