import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

/*--------------------SignUp---------------------*/
export const SignUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false
      });
    }

    const hashedPassword = await bcryptjs.hash(password,16);
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message:"Account created successfully",
      success:true,
    })

  } catch (error) {
    console.log(error);
  }
};

/*--------------------LogIn---------------------*/
export const Login = async (req,res) => {
  try{
    const {email,password}=req.body;
    // basic validation
    if(!email || !password){
      return res.status(401).json({
        message:"All fields are required",
        success:false
      })
    }

    const user=await User.findOne({email});
    if(!user){
      return res.status(401).json({
        message:"User does not exist with this email",
        success:false
      })
    }

    const isMatch=await bcryptjs.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({
        message:"Invalid email or password",
        success:false
      })
    }
    const tokenData={
      userId:user._id
    }
    const token= await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});

    return res.status(200).cookie("token",token,{expiresIn:"1d"}).json({
      message:`Welcome back ${user.name}`,
      success:true
    })
  }
  catch(error){
    console.log(error);
  }
};
/*--------------------LogOut---------------------*/
export const Logout =async (req,res) => {
  try{
    return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
      message:"User Logged out successfully",
      success:true
    })
  }
  catch(error){
    console.log(error);
  }
};
