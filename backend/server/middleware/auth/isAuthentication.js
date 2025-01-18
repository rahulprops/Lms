import jwt from 'jsonwebtoken'
import errorHandler from '../error_logs/errorHandler.js'
const isAuthenticated= async (req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return errorHandler(res,400,"user not Authorized")
        }
        const decode = await jwt.verify(token,process.env.JWT_TOKEN)
        // console.log(decode)
        if(!decode){
            return errorHandler(res,400,"invalid token")
        }
        // console.log(decode.id)
        req.id=decode.id
        next()
    }catch(err){
        return errorHandler(res,500,`server error ${err.message}`)
    }
}
 
export default isAuthenticated;