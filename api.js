const { Router } = require("express")
const db = require("./db.js")

const router = Router()

router.get('/todos', async (_, res) => {
   const arr = await db.listar();
    res.json(arr)
})

router.post('/todos', (req, res) => {
    db.ingresar(req.body)
    res.json({"message": "Resultado Exitoso" })
})

router.delete('/todos/:id', (req, res) => {
    const { id } = req.params
    db.eliminar(id)
    res.json({"message": "Resultado Exitoso"})
})


module.exports = router