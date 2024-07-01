import mongoose from 'mongoose'

const conexionDB = (url) =>{
    return mongoose.connect(url)
}

export  default conexionDB