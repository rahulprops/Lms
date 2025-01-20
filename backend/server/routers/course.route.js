import express from 'express'
import isAuthenticated from '../middleware/auth/isAuthentication.js'
import { createCourse, editCourse, getCreatorCourse } from '../controller/course.controller.js'

import upload from '../utils/multer.js'
const courseRouter=express.Router()

courseRouter.post("/create",isAuthenticated,createCourse)
courseRouter.get("/getcourse",isAuthenticated,getCreatorCourse)
courseRouter.put("/edit/:courseId",isAuthenticated,upload.single("thumbnail"),editCourse)
export default courseRouter;