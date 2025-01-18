import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export const generateToken=(id)=>{
    const token= jwt.sign({id},process.env.JWT_TOKEN,{expiresIn:"1d"})
   return token 
    
}