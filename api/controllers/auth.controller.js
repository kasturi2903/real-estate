import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

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

export const login=async(req,res)=>{
    // res.json({message:"login"})
    // console.log(req.body)
    const {username,password} = req.body;
    try {
        const user  = await prisma.user.findUnique({
            where: {username}
        })
        if(!user) return res.status(401).json({message:"Invalid credentials!"})
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
          return res.status(400).json({ message: "Invalid Credentials!" });

        const age = 1000 * 60 * 60 * 24 * 7;

     const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;
       console.log(user)
        res
        .cookie("token", token, {
          httpOnly: true,
          // secure:true,
          maxAge: age,
        }) 
        .status(200)
        .json(userInfo);
    


    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
    
}

export const logout=(req,res)=>{
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
}