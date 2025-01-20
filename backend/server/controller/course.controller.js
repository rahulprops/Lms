import mongoose from "mongoose";
import errorHandler from "../middleware/error_logs/errorHandler.js"
import courseModel from "../models/course.model.js";
import userModel from "../models/user.model.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

//! createCourse
export const createCourse= async(req,res)=>{
    const {coursetitle,category}=req.body;
    const id=req.id;
    // console.log(id)
    if(!coursetitle || !category){
        return errorHandler(res,400,"courseTitle and category are required")
    }
    try{
         // check user 
         const isExistUser= await userModel.findById(id)
         if(!isExistUser){
            return errorHandler(res,404,"user not found")
         }

        const create= new courseModel({
            courseTitle:coursetitle,
            category:category,
            creator:isExistUser._id
        })
        if(!create){
           return errorHandler(res,400,"course create falied")
        }
           await create.save()
           return errorHandler(res,201,"create course sucess",create)
    }catch(err){
        return errorHandler(res,500,`server error`)
    }
}
//! get Course
export const getCreatorCourse= async (req,res)=>{
    const id=req.id
    try{
        const courses=await courseModel.find({creator:id})
        if(!courses){
            return errorHandler(res,400,"coures not found")
        }
        return errorHandler(res,200,"get courese sucess",courses)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
//! edit course
export const editCourse=async (req,res)=>{
    const {courseTitle,subTitle,description,category,coureseLevel,coursePrice}=req.body;
    const thumbnail=req.file;
    const {courseId}=req.params;

    try{
        // validate id 
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            return errorHandler(res,400,"please enter valid id")
        }
        // check course exist or not
        const course=await courseModel.findById(courseId)
        if(!course){
            return errorHandler(res,400,"course not found")
        }
        let courseThumbnail;
        if(thumbnail){
            if(course.courseThubnail){
                const publicId=course.courseThubnail.split("/").pop().split(".")[0];
                await deleteMediaFromCloudinary(publicId) // delete old image
            }
        }
        courseThumbnail= await uploadMedia(thumbnail.path);
        // upload a thubanil on cloudinary
        const updateData={courseTitle:courseTitle,subTitle:subTitle,description:description,category:category,courseLevel:coureseLevel,coursePrice:coursePrice,courseThubnail:courseThumbnail.secure_url}
        const updateCourse=await courseModel.findByIdAndUpdate(courseId,updateData,{new:true})
        if(!updateCourse){
            return errorHandler(res,400,"update failed")
        }
        return errorHandler(res,200,"update sucess",updateCourse)
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}