
import express from 'express'
import  'dotenv/config.js'
import { dbConnection } from './server/database/dbConnection.js';

const app=express()
const port=process.env.PORT;
//! sever lisen
app.listen(port,()=>{
    console.log(`server is running :http://localhost:${port}`)
    dbConnection()
})

