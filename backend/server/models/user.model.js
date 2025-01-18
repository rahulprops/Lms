import mongoose, { Schema } from 'mongoose'

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["students","instructor"],
        default:"student",
        
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"course"
        }
    ],
    photourl:{
        type:String,
        default:""
    },
},{timestamps:true})