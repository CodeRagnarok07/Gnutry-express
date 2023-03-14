import express from 'express'
const path = require('path');



const router = express.Router();


import foods from './foods'
import auth from './auth'
// Routing
// router.get('/', (req, res) => res.sendFile('interface.html')) // public
// router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/apiview.html')));
router.get('/', (req, res) => res.sendFile('index.html'));

console.log(path.join(__dirname + '/apiview.html'));
// api router
// router.use('/auth', auth)
router.use('/foods', foods)

module.exports = router;