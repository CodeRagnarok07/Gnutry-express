
import { secretKey } from '../config'
import jwt from 'jsonwebtoken'

export default async (req, res, next) => {

    const token = req.headers["x-authorization"]

    const tokenvVerify = jwt.verify(JSON.parse(token), secretKey)
    console.log(tokenvVerify);
    // console.log(JSON.parse(token));



    if (token) {
        if (tokenvVerify) {
            next()
        } else {
            res.status(400).json("token invalido")
        }
    } else {
        res.status(400).json("usuario no logeado")
    }


}