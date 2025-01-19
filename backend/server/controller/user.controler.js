import mongoose from "mongoose";
import { generateToken } from "../config/jwtToken.js";
import errorHandler from "../middleware/error_logs/errorHandler.js";
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
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
    const id=req.id;
    if(!id){
        return errorHandler(res,400,"id not found")
    }
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return errorHandler(res,400,"please enter valid id")
        }
        // find profile
        const getUser= await userModel.findById(id).select("-password")
        if(!getUser){
            return errorHandler(res,400,"user not found ")
        }
       return errorHandler(res,200,"profile found sucess",getUser)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
 }
 
 
 //!updateuser Profile
 export const updateProfile= async (req,res)=>{
    const id=req.id
    const {name}=req.body;
    const profilePhoto=req.file;

    try{
        const user= await userModel.findById(id)
        if(!user){
            return errorHandler(res,400,"user not found")
        }
        // extract public id of thd old image from thr url is it exists;
        if(user.photourl){
            const publicId=user.photourl.split("/").pop().split(".")[0];
            deleteMediaFromCloudinary(publicId)
            console.log(publicId)
        }
        // upload new photo
        const cloudResponse= await uploadMedia(profilePhoto.path)
        // console.log(cloudResponse)
        const { secure_url} =cloudResponse
        // console.log(secure_url)
        const updateData={name:name,photourl:secure_url}
        const updateUser= await userModel.findByIdAndUpdate(id,updateData,{new :true})
        if(updateUser){
            return errorHandler(res,200,"profile update sucess",updateUser)
        }else{
            return errorHandler(res,400,"update failed")
        }
    }catch(err){
        return errorHandler(res,500,`server error${err.message}`)
    }
 }