import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import cors from 'cors';

import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // replace with your frontend's origin
    credentials: true, // Enable Access-Control-Allow-Credentials
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(8800, () => {
    console.log("Server is running on port 8800");
});