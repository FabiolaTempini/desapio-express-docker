const { Router } = require("express")
const db = require("./db.js")

const router = Router()

router.get('/', async (_, res) => {
    const arr = await db.listar();
    res.render('home', { clientes: arr })
})

router.get('/todos', async (_, res) => {
    const arr = await db.listar();
    res.render('home', { clientes: arr })
})

router.get('/todo-create', (_, res) => {
    res.render('crearClientes')
})