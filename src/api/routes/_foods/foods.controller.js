import FoodDb from '../../models/foods.model'




export const post = async (req, res) => {
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
}

export const get = async(req, res) => {
    const products = await FoodDb.find();
    res.json(products)
}


export const getById = async(req, res) => {
    const currentFood = await FoodDb.findById(req.params.id)
    res.status(200).json(currentFood)

}

export const updateById = async(req, res) => {

    const updateElement = await FoodDb.findByIdAndUpdate(req.params.id, req.body, {
        new:true // devuelve los datos de actualizacion
    })

    res.status(200).json(updateElement)

}


export const deleteById = async(req, res) => {

    const currentFood = await FoodDb.findByIdAndDelete(req.params.id)
    res.status(200).json("req.params.id eliminado")

}
