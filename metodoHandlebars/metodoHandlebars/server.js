// >> Consigna:  
// Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
// a) Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
// b) Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
// c) Ambas páginas contarán con un botón que redirija a la otra.

// >> Consigna:  
// Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
// Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
// Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.


const fs = require ('fs')
const express = require ('express')
const multer = require ('multer')
const path = require('path')
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 8080

const homeRouter = require('./routes/routes')


app.use("/static/", express.static(path.join(__dirname, "public")))
app.set('view engine', 'hbs')
app.engine('hbs',engine({
    layoutsDir: path.join(__dirname,'/views'),
    extname: 'hbs',
    defaultLayout:''
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', homeRouter)


app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
