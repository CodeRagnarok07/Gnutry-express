import express from 'express'
import morgan from 'morgan'
const path = require('path');


import foods from './foods'

const app = express()

app.use(morgan("dev")) // enriquece la informacrion de la consola 
app.use(express.json()) // permite hacer lectura de aplication/json


// Routing
app.get('/', (req,res) =>{ 
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.use('/foods', foods)



export default app