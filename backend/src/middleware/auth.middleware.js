import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"Unauthorized"});
        }
        
        const user = await User.findOne(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json9({message:"Unauthorized"});
        }
        req.user = user;
        next();
    }
    catch(error){
        console.log("error in protectRoute",error.message);
        res.status(401).json({message:"Unauthorized"});
    }
}