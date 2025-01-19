import express from 'express'
import { getUserProfile, logout, updateProfile, userLogin, userRegister } from '../controller/user.controler.js'
import isAuthenticated from '../middleware/auth/isAuthentication.js'
import upload from '../utils/multer.js'
const userRouter=express.Router()

//! router create
userRouter.post("/registor",userRegister)
userRouter.post("/login",userLogin)
userRouter.get("/logout",logout)
userRouter.get("/get-user",isAuthenticated,getUserProfile)
userRouter.put("/update-profile",isAuthenticated, upload.single("profilePhoto"),updateProfile)

export default userRouter;