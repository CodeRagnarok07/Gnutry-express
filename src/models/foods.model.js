import { Schema, model } from 'mongoose'

const foodsSchema = new Schema({
    name:String,
    category:String,
    imgURL:String,
    
},
{
    timeseries:true,
    versionKey:false
}
)

export default model("Foods",foodsSchema)