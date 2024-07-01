import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
import 'dotenv/config'

export const verifyUser = (req, res, next) =>{
    const token = req.cookies.access_token;
    
    if(!token){
        return next(errorHandler(401, 'No esta autorizado'))
    }

    jwt.verify(token, process.env.KEY_TOKEN, (err, user) =>{
        if(err){
            return next(errorHandler(403, 'Prohibido'))
        }
        req.user = user;
        next();
    })
}