import { Router } from "express";
import FoodDb from '../models/foods.model'

import { verifyToken } from '../middlewares'

const router = Router()

// import * as ctrl from './foods.controller'

router.get('/', async (req, res) => {
    const products = await FoodDb.find();
    res.json(products)
})
router.post('/', verifyToken, async (req, res) => {
    const {
        name,
        category,
        imgURL,
    } = req.body

    const newFood = new FoodDb({
        name,
        category,
        imgURL,
    })
    const productsave = await newFood.save() // devuelve el elemento recien creado

    res.status(200).json(productsave)
})
router.get('/:id', async (req, res) => {
    const currentFood = await FoodDb.findById(req.params.id)
    res.status(200).json(currentFood)

})
router.put('/:id', async (req, res) => {

    const updateElement = await FoodDb.findByIdAndUpdate(req.params.id, req.body, {
        new: true // devuelve los datos de actualizacion
    })

    res.status(200).json(updateElement)

})
router.delete('/:id', async (req, res) => {

    const currentFood = await FoodDb.findByIdAndDelete(req.params.id)
    res.status(200).json("req.params.id eliminado")

})


export default router