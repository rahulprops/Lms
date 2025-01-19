import express from 'express'
import isAuthenticated from '../middleware/auth/isAuthentication.js'
import { createCourse, getCreatorCourse } from '../controller/course.controller.js'
const courseRouter=express.Router()

courseRouter.post("/create",isAuthenticated,createCourse)
courseRouter.get("/getcourse",isAuthenticated,getCreatorCourse)

export default courseRouter;