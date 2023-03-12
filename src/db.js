import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/gntry")
    .then((data) => { console.log("db conected") })
    .catch((error) => { console.log(error) })
