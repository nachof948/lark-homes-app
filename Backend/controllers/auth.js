import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import 'dotenv/config'

/* SIGN UP */
export const signup = async (req, res, next) =>{
    const { username, email, password, seller, imageProfile } = req.body;
    
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(404).json({ message: 'Este email ya esta registrado'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            seller,
            imageProfile
        })

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.KEY_TOKEN)

        const expiresDate = new Date();
        expiresDate.setDate(expiresDate.getDate() + 7);
        res.status(200).cookie('access_token', token, {httpOnly: true, expires: expiresDate}).json(newUser)

    } catch (error) {
        next(error)
    }
}

/* SIGN IN */
export const signin = async (req, res, next) =>{
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(404).json({ message: 'Usuario o Contraseña invalida'})
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        
        if(!isPasswordCorrect){
            return res.status(401).json({ message: 'Usuario o Contraseña invalida' })
        }
        const token = jwt.sign({ email: existingUser.email, password: password ,id: existingUser._id}, process.env.KEY_TOKEN)
        const expiresDate = new Date();
        expiresDate.setDate(expiresDate.getDate() + 7);
        res.status(200).cookie('access_token', token, { httpOnly: true, sameSite: 'None',expires: expiresDate}).json(existingUser)
    } catch (error) {
        next(error)
    }
}

/* LOGOUT */
export const logout = async (req, res, next) =>{
    try {
        res.clearCookie('access_token')
        res.status(200).json({ message: 'Usuario deslogueado'})
    } catch (error) {
        next(error)
    }
}

/* GOOGLE */
export const google = async (req, res, next) =>{
    const { email, username, imageProfile } = req.body;
    try {
        const user = await User.findOne({ email })
        if(user){
            const token = jwt.sign({ id: user._id}, process.env.KEY_TOKEN)
            const expiresDate = new Date();
            expiresDate.setDate(expiresDate.getDate() + 7);
            res.status(200).cookie('access_token', token, { httpOnly:true, expires: expiresDate }).json(user)
        }else {
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashPassword = await bcrypt.hash(generatePassword, 12);
            const newUser = await User.create({
                username,
                email,
                imageProfile,
                password: hashPassword
            })
            await newUser.save()
            const token = jwt.sign({ id: newUser._id}, process.env.KEY_TOKEN)
            const expiresDate = new Date()
            expiresDate.setDate(expiresDate.getDate() + 7);
            res.status(200).cookie('access_token', token, { httpOnly:true, expires: expiresDate}).json(newUser)
        }
    } catch (error) {
        next(error)
    }
}

