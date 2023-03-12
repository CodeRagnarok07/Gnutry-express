import FoodDb from '../models/foods.model'




export const post = async (req, res) => {
    const data = req.body

    const {
        name,
        category,
        imgURL,
    } = data

    const newFood = new FoodDb({
        name,
        category,
        imgURL,
    })
    const productsave = await newFood.save() // devuelve el elemento recien creado


    res.status(200).json(productsave)
}

export const get = async(req, res) => {
    const products = await FoodDb.find();
    res.json(products)
}


export const getById = (req, res) => {
}
export const updateById = (req, res) => {
}
export const deleteById = (req, res) => {
}
