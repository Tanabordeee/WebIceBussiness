import mongoose from "mongoose";

export async function connectMongoDB(){
    try{
        await mongoose.connect(process.env.DB_CONN_STRING as string);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Failed to connect to MongoDB" , error);
    }
}