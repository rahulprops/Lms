import mongoose from "mongoose"

const dbCon=process.env.DB_CONNECTION || "";
 
if(!dbCon){
    console.log("missing db connection")
}
export const dbConnection= async ()=>{
    try{
        const db= await mongoose.connect(dbCon)   
        if(db){
            console.log("database connect sucessful")
        }
    }catch(e){
        return console.log(e)
    }
}