import express from "express"
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js"
const app = express()
import cors from 'cors';
app.use(cors({
    origin: 'http://localhost:5173', // replace with your frontend's origin
    credentials: true, // Enable Access-Control-Allow-Credentials
  }));
import authRouter from "./routes/auth.route.js"

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.use("/api/posts",postRoute)
app.listen(8800,()=>{
    console.log("server is running on port 8800")
})