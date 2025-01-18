import express from 'express'
import { userLogin, userRegister } from '../controller/user.controler.js'
const userRouter=express.Router()

//! router create
userRouter.post("/registor",userRegister)
userRouter.post("/login",userLogin)

export default userRouter;