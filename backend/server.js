
import express from 'express'
import  'dotenv/config.js'
import { dbConnection } from './server/database/dbConnection.js';
import userRouter from './server/routers/user.route.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app=express()
const port=process.env.PORT;
//! middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
//! api end points
app.use("/api/v1/user",userRouter)
//! sever lisen
app.listen(port,()=>{
    console.log(`server is running :http://localhost:${port}`)
    dbConnection()
})

