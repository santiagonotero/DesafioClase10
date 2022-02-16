const fs = require ('fs')
const express = require ('express')
const multer = require ('multer')
const path = require('path')
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 8080

const homeRouter = require('./routes/routes')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'pug');

app.use('/', homeRouter)

app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})
