const express = require('express');
const ConectarBD = require('../config/db'); //conectar base de datos, no es modulo entonces no se coloca db.js
const cors = require('cors'); //conectar cors


const app = express(); //se instancia express en app
const port = process.env.PORT || 5000;

//Le colocamos un numero al puerto 
// const port = 5000;
//Enlazar conexion con la base de datos 
ConectarBD();
app.use(cors());

app.use(express.json()); 
app.use('/api/cliente',require('../routes/cliente'));
app.use('/api/producto',require('../routes/producto'));


      //Configurar el puerto de conexion 
app.listen(port,()=>{
    console.log(`Esta conectado el servidor con el puerto ${port}`);
});

app.get('/',(req,res)=>{
    res.send('Bienvenido estamos desde el navegador')
})