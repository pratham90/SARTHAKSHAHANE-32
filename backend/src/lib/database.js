import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const ConnectDB = async () =>{
    
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected");
    }
    catch(error){
        console.log(`error connecting DB ${error}`);
    }
}