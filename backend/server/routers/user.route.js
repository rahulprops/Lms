import express from 'express'
import { userRegister } from '../controller/user.controler.js'
const userRouter=express.Router()

//! router create
userRouter.post("/registor",userRegister)

export default userRouter;