//Rota para acessar a API

const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

//Habilitando o cors
app.use(cors())

app.get('/', async(req, res) => {

    try {
    
        //desestruturação para retirar o data do response
        const { data } =  await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    
    } catch (error) {
        console.error(error)    
    }
   
})

app.listen('4567')