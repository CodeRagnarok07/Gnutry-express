import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }




mongoose.connect(process.env.DBURI)
    .then( db => { console.log("db conected") })
    .catch((error) => { console.log(error) })
