import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
  const { role, email, password } = req.body;

  if (!role || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "password must have 8 characters" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, role, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        role: newUser.role,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("error in signup", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "invalid email or password" });
      return;
    }
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      role: user.role,
      email: user.email,
    });
  } catch (error) {
    console.log("error in login", error.message);
    res
      .status(500)
      .json({ message: "Internal server error failed", error: error.message });
  }
};
export const logout = async (req, res) => {
    try{
    res.cookie('jwt','',{
        maxAge:0
    })
    res.status(200).json({message:"Successfully Logged out"});
    
}catch(error){
    console.log("error in logout", error.message);
    re.status(500).json({message:"Internal Server Error", error:error.message});
}

};
export const checkAuth = async (req, res) => {
     try {
    res.status(200).json(req.user)
  } catch (error) {
    console.log("error in check auth",error.message)
    res.status(500).json({message:"internal server error"})
  }
};
