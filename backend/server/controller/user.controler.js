import { generateToken } from "../config/jwtToken.js";
import errorHandler from "../middleware/error_logs/errorHandler.js";
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
//! create user 
export const userRegister= async (req ,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return errorHandler(res,400,"all fiels requied")
    }
    if(!validator.isEmail(email)){
        return errorHandler(res,400,"please enter valid email")
    }
    try{
         const isExistUser=await userModel.findOne({email:email})
         if(isExistUser){
            return errorHandler(res,400,"user already exist")
         }
         // password hash
         const hashPassword= await bcrypt.hash(password,12)
         // create user
         const user= new userModel({
            name:name,
            email:email,
            password:hashPassword
         })
         if(user){
            const createuser= await user.save()
            if(createuser){
                return errorHandler(res,201,"create user sucessful",user)
            }
         }else{
            return errorHandler(res,400,"user create failed")
         }
        return res.status(200).json({
            message:"user registor"
        })
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)

    }
}
//! login user
 export const userLogin= async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return errorHandler(res,400,"all fiels requied")
    }
    // check email valid or not
    if(!validator.isEmail(email)){
        return errorHandler(res,400,"please enter valid email")
    }
    try{
        const isMatchEmail= await userModel.findOne({email:email})
        if(!isMatchEmail){
            return errorHandler(res,404,"user not found")
        }
        // compare password 
        const isValidPass= await bcrypt.compare(password,isMatchEmail.password)
        if(!isValidPass){
            
          return errorHandler(res,400,"password invalid")
        }
      const token=  generateToken(isMatchEmail._id)
      if(!token){
        return errorHandler(res,400,"token generate failed")
      }
       res.cookie("token",token,{
        httpOnly:true,
        maxAge: 24*60*60*1000
       })
        return errorHandler(res,200,"login sucessful",isMatchEmail)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
 }

 //! logout user
 export const logout= async (req,res)=>{
    try{
        const clarcookie= res.cookie("token","",{ httpOnly:true,maxAge:0})
        if(clarcookie){
            return errorHandler(res,200,"logout sucess")
        }
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
 }

 //! get user
 export const getUserProfile= async(req,res)=>{
    try{
        console.log("get ")
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
 }