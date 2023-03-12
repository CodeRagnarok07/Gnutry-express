import express from 'express'
import morgan from 'morgan'



import products from './products'

const app = express()
app.use(morgan("dev"))
// enriquece la informacrion de la consola 


// Routing
app.get('/', (req, res)=>res.json("hola mundo"))
app.use('/products',products)



export default app