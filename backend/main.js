import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// local imports
import authRoutes from './src/routes/auth.route.js';
import { ConnectDB } from './src/lib/database.js';


dotenv.config({ path: "./.env" });   

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());


//Routes
app.use('/api/auth',authRoutes);

//server
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
    ConnectDB();
})