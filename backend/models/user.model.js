const conexion = require('../config/connection');

const schemaProducto = new conexion.Schema({
    referencia:{
        type: String,
        required: [true, 'la referencia es obligatoria']
    },
    nombre:{
        type: String,
        required: [true, 'asignar un nombre es obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'la descripcion es obligatoria']
    },
    precio:{
        type: Number,
        default: [0, 'el precio por defecto es cero'],
        min: [0, 'El precio minimo es cero'],
    },
    stock:{
        type: Number,
        default: [0, 'El stock por defecto es cero'],
        min: [0, 'El stock minimo es de cero'],
    },
    imagen:{
        type: String,
        required: [true, 'no existe la imagen o ruta a la imagen por defecto']
    },
    habilitado:{
        type: Boolean,
        default: true
    }
});

const producto = conexion.model('producto', schemaProducto);

module.exports = producto;
