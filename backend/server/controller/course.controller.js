import errorHandler from "../middleware/error_logs/errorHandler.js"
import courseModel from "../models/course.model.js";
import userModel from "../models/user.model.js";

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