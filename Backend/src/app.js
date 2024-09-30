import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/errorHandler.js"
import userRouter from './routes/user.routes.js'
import alumniRouter from "./routes/alumni.router.js";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb "}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });

app.use(errorHandler);


//routes declaration
app.use("/api/v1/users", userRouter) // goes to user.routes.js
app.use("/api/alumni", alumniRouter);
//http://localhost:8000/api/v1/users/register


export {app}