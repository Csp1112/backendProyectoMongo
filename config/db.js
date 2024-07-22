//Configuracion base de datos 
const mongoose = require('mongoose');
require('dotenv').config();

//Montar una promesa 
const ConectarBD = ()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log('Estamos conectados con MongoDB'))
    .catch((error)=>console.log('Error al conectar con MongoDB',error));
}
module.exports = ConectarBD; //ConectarDB cuando se llame, se llama toda la conexión que tiene que ver con la base de datos 
