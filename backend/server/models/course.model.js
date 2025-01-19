import mongoose, { Schema } from "mongoose";

//! create schema
const courseSchema=new Schema({
    courseTitle:{
        type:String,
        required:true,
    },
    subTitle:{
        type:String,
    },
     description:{
        type:String
     },
     category:{
        type:String,
        required:true
     },
     courseLevel:{
        type:String,
        enum:["Beginner","Medium","Advance"]
     },
     coursePrice:{
        type:Number
     },
     enrolledStudent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
     ],
     lectures:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"lecture"
        }
     ],
     creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
     },
     isPublished:{
        type:Boolean,
        default:false
     }
},{timestamps:true})

const courseModel=mongoose.model("course",courseSchema)
export default courseModel;