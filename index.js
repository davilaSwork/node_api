const exp = require('express');
const modeloProducto = require("./backend/models/user.model")
require('dotenv').config();

const app = exp();

app.use(exp.urlencoded({extended:false}));
app.use(exp.json())

app.get('/conectar', async (req, res) => {
    const consulta = await modeloProducto.find({});
    console.log(consulta)
});

app.get('/Producto/:ref', async (req,res)=>{
    let ProductoEncontrado = await modeloProducto.findOne({referencia: req.params.ref});
    if (ProductoEncontrado)
        res.status(200).json(ProductoEncontrado);
    else 
        res.status(404).json({"error": "Producto no encontrado"})
})


app.post('/productos', async (req, res) => {

    const nuevoProducto = {
        referencia : req.body.referenciaProducto,
        nombre : req.body.nombreProducto,
        descripcion : req.body.descripcionProducto,
        precio : req.body.precioProducto,
        stock : req.body.stockProducto,
        imagen : req.body.imagenProducto
    };

    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
        res.status(404).json({"mensaje":"se presento un error"})
});

app.put('/producto/:ref', async (req, res) => {
    const productoEditado = {
        referencia : req.params.ref,
        nombre : req.body.nombreProducto,
        descripcion : req.body.descripcionProducto,
        precio : req.body.precioProducto,
        stock : req.body.stockProducto,
        imagen : req.body.imagenProducto
    };

    let Actualizar = await modeloProducto.findByIdAndUpdate({referencia:req.params.ref}, productoEditado);
    if(Actualizar)
        res.status(200).json({"mensaje":"Actualización exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})
});

app.delete('/productos/:id', async (req, res) => {
    console.log(req.params.id , req.body.referenciaProducto)
    let eliminacion = await modeloProducto.findByIdAndDelete({referencia:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"Eliminación exitosa"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})
});

app.listen(process.env.PORT)