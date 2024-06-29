import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { COOKIE_NAME } from '../constants.js';
dotenv.config();
export const createToken=(email,name,expiresIn)=>{
    const payload={email,name};
    const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn})
    return token;
}
export const verifyToken=(req,res,next)=>{
    console.log(req.signedCookies);
    const token=req.signedCookies[`${COOKIE_NAME}`];
    console.log(token);
    if(!token||token.trim()===""){
        return res.status(401).json({message:"Token not found"})
    }
    return new Promise((resolve,reject)=>{
        return jwt.verify(token,process.env.JWT_SECRET,(err,success)=>{
            if(err){
                reject(err.message);
                return res.status(401).json({message:"Token expired"})
            }
            else{
                resolve();
                res.locals.jwtData=success;
                return next();

            }
        })
    })
}