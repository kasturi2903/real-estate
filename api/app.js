import express from "express"
import postRoute from "./routes/post.route.js"
const app = express()


import authRouter from "./routes/auth.route.js"

app.use(express.json())
app.use("/api/auth",authRouter)

app.use("/api/posts",postRoute)
app.listen(8800,()=>{
    console.log("server is running on port 8800")
})