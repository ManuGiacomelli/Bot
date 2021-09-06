const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))


app.get('/pessoas', (req, res) => {
    res.send (database.mostrarPessoas())
})


app.get('/pessoas/:id', (req, res) => {
    res.send (database.mostrarPessoa(req.params.id))
})


app.post('/pessoas', (req, res) => {
   const pessoa = dataBase.salvarPessoas({
       nome: req.body.nome,
       idade: req.body.idade,
       cep: req.body.cep,
       serviço: req.body.serviço,
       telefone: req.body.telefone 
       
   })

   res.send(pessoa)
})

app.listen(3003)