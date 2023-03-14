import { Schema, model } from 'mongoose'

const userSchemal = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    admin: Boolean

    // roles: [{ // relacion objeto id
    //     ref: "user-rol",
    //     type: Schema.Types.ObjectId
    // }]
},
    {
        timeseries: true,
        versionKey: false
    }
)


// METHODS

import bcrypt from 'bcryptjs'

// cifrado de password
userSchemal.statics.encriptarPass = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// comparacion de contraseña
userSchemal.statics.comparePass = async (password, passwordRecive)=>{
    // """compara la contraseña sin encriptar con la contraseña encriptadad guardada en la base de datos"""
    
    return await bcrypt.compare(password, passwordRecive)
}



export default model("Users", userSchemal)