const {Router} = require('express')
const { append } = require('express/lib/response')

const router = Router()
const path = require('path')

const contenedor = require('../contenedor.js')
let instanciaArchivo = new contenedor('./Productos/Productos.json')

const listadoElementos=[]

router.get('/', (req,res)=>{

    instanciaArchivo.getAll().then((data)=>{

        const listado=JSON.parse(listadoElementos.concat(data))
        res.render('index', { listado })
    })
})

router.get('/add', (req,res)=>{
    res.render('add')
})

router.post('/add', (req, res)=>{
    console.log(req.body)
    instanciaArchivo.save(req.body).then((data)=>{
        console.log(data)
        res.redirect('/')
    })
})

module.exports = router
