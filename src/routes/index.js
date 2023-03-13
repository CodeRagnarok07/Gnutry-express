import express from 'express'
const path = require('path');



const router = express.Router();


import foods from './foods'
import auth from './auth'
// Routing
router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')))
router.get('/interface', (req, res) => res.sendFile(path.join(__dirname + '/views/interface.html')));



// api router
router.use('/api/auth', auth)
router.use('/api/foods', foods)


module.exports = router;