import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword // Change this line
            }
        });

        console.log(newUser);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

export const login=(req,res)=>{
   // res.json({message:"login"})
    console.log(req.body)
}

export const logout=(req,res)=>{
    res.json({message:"logout"})
}