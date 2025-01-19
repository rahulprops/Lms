import express from 'express'
import isAuthenticated from '../middleware/auth/isAuthentication.js'
import { createCourse } from '../controller/course.controller.js'
const courseRouter=express.Router()

courseRouter.post("/create",isAuthenticated,createCourse)

export default courseRouter;