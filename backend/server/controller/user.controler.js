import errorHandler from "../middleware/error_logs/errorHandler.js";
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
export const userRegister= async (req , res)=>{
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