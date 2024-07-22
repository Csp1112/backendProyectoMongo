//Debe comunicarse (conectarse) con el modelo 
const Producto = require('../models/Producto');

//Función AGREGAR producto 
exports.agregarProducto = async (req,res) => {
    try {
        //Crear un nuevo producto 
        let producto = new Producto(req.body);
        await producto.save(); //espera mientras que producto se guarda
        res.send(producto); //envia por consola lo que esta en producto que se acaba de crear
        // res.json({mensaje: 'producto agregado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
};


//Función para MOSTRAR todos los productos 

exports.mostrarProductos = async (req,res) => {

    try {
        const producto = await Producto.find();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
        
    }
};



//Función para BUSCAR UN producto 
exports.buscarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).send('No se encuentra el producto');
        } else{
            res.send(producto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el producto');
        
    }

};

//funcion para ELIMINAR un producto 
exports.eliminarProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).send('No se encuentra el producto');
        } else{
            await Producto.findByIdAndDelete(req.params.id);
            res.send('Producto eliminado correctamente');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
        
    }
};


//funcion ACTUALIZAR producto 
exports.actualizarProductos = async(req,res) =>{
    try {
        const producto = await Producto.findOneAndUpdate({_id:req.params.id}, req.body);   
        if(!producto){ 
            res.status(404).send('Producto no encontrado');
        } else{
            res.json(producto);}
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto');
        
    }
};


//funcion para modificar un producto
exports.modificarProducto = async(req,res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!producto){
            return res.status(404).send('Producto no encontrado');
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto');
        
    }
};