import { Router } from "express";
import AuthDB from '../models/user.model'
import {secretKey} from '../config'
import jwt from 'jsonwebtoken'


const router = Router()

// import * as ctrl from './foods.controller'




// LOGIN


const createToken = (userId)=> jwt.sign({ id: userId }, secretKey,
    { expiresIn: 86400 }
)

router.post('/register', async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body
    const newUser = new AuthDB({
        name,
        email,
        password: await AuthDB.encriptarPass(password)
    })
    const usersave = await newUser.save() // devuelve el elemento recien creado
    const token = createToken(usersave.id)
    res.status(200).json({
        "userCreate": usersave,
        "tokenAuth": token
    })
})

// LOGOUT

router.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body

    const currentUser = await AuthDB.findOne({ email: email }) //.populate("clave foranea")

    const correctPassword = await AuthDB.comparePass(password, currentUser.password)

    if (currentUser) {
        if (correctPassword){
            const token = createToken(currentUser.id)
            res.status(200).json({
                "userCreate": currentUser,
                "tokenAuth": token
            })

        }else{
            res.status(400).json("password incorrect")
        }
    } else {
        res.status(400).json("usuario no existe")

    }

})


export default router