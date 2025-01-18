import express from 'express'
import { getUserProfile, logout, userLogin, userRegister } from '../controller/user.controler.js'
import isAuthenticated from '../middleware/auth/isAuthentication.js'
const userRouter=express.Router()

//! router create
userRouter.post("/registor",userRegister)
userRouter.post("/login",userLogin)
userRouter.get("/logout",logout)
userRouter.get("/get-user",isAuthenticated,getUserProfile)

export default userRouter;