const User = require("../models/user.model");

const getAuthStatus = (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working 🚀",
  });
};

const login = (req, res) => {
    console.log(req.body);
  res.json({
    success: true,
    message: "Login API reached!",
  });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getAuthStatus,
  login,
  register,
};