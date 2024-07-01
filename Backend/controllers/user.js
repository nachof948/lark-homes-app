import User from '../models/user.js'
import Property from '../models/property.js'
import { errorHandler } from '../middleware/error.js'

export const updateUser = async (req, res, next) =>{
    const { email, username, password, imageProfile, phone, biography } = req.body;
    const { id } = req.params;
    try {
        const updateUser = await User.findByIdAndUpdate(id,{
            $set:{
                username: username,
                email: email,
                password:password,
                imageProfile: imageProfile,
                phone: phone,
                biography: biography
            }
        },{ new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) =>{
    const { id } = req.params
    try {
        await User.findOneAndDelete(id);
        res.clearCoookie('access_token')
        res.status(200).json({ message: 'El usuario fue eliminado'})
    } catch (error) {
        next(error)
    }
}

export const getUserProperties = async (req, res, next) =>{
    const { id } = req.params
    if(req.user.id === id){
        try {
            const properties = await Property.find({userRef: id});
            res.status(200).json(properties)
        } catch (error) {
            next(error)
        }
    }
}

export const getUser = async (req, res, next) =>{
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}