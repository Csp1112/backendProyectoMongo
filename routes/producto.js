const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');


//Creamos las rutas del crud 
//Como se va a agregar se usa POST 
router.post('/',productoController.agregarProducto); //POST porque se agregar contenido
router.get('/',productoController.mostrarProductos); //GET porque se muestra el contenido
router.get('/:id',productoController.buscarProducto); //GET porque se muestra el contenido - id porque se busca por id findbyid
router.delete('/:id', productoController.eliminarProducto);
router.put('/:id', productoController.actualizarProductos); //segunda opcion de actualizar
router.patch('/:id', productoController.modificarProducto);

//Se exporta el modulo, porque se debe llamar en el index principal
module.exports = router; //se exporta el router, para que se pueda utilizar en el index principal



