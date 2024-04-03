import Admin from "../modules/admin_module.js";
import jwt from "jsonwebtoken";


export const login = async (req, res, next) => {
  const {email, password} =req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const validAdmin = await Admin.findOne({email});
    if (!validAdmin) {
      return res.status(400).json({ error: "Email not found" });
    }
    if (password !== validAdmin.password) {
      return res.status(400).json({ error: "Password not correct" });
    }
    const token = jwt.sign({id: validAdmin._id}, process.env.JWT_SECRET)
    const {password: pass, ...data} = validAdmin._doc;
    res.cookie("token", token, { httpOnly: true}).status(200).json(data)
  } catch (error) {
    next(error);
  }
}


export const logout = (req, res, next) => {
  try {
    res.clearCookie("token")
    res.status(200).json("Admin has been sign out")
  } catch (error) {
    next(error)
  }
}