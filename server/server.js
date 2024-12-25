import express from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import connectDB from './db/connectDB.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000


//Middlewares
app.use(express.json()) // It Allows to parse JSON data in the body
app.use(express.urlencoded({ extended: true })) //To Parse form data in the body
app.use(cookieParser())


app.listen(PORT,connectDB());