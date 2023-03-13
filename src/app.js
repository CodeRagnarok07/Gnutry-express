import express from 'express'
import morgan from 'morgan'
import './db'
// import createDefaultRole from './libs/userRoll'
// createDefaultRole()

import routes from './routes'
const path = require('path');


const app = express()

app.use(morgan("dev")) // enriquece la informacrion de la consola 
app.use(express.json()) // permite hacer lectura de aplication/json
app.use(express.static(path.join(__dirname, '../public')))

app.use("/", routes);

const PORT = 3000



app.listen(PORT);
console.log(`server on port http://localhost:${PORT}/`);
