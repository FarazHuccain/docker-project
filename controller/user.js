import User from "../models/user.js";
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
