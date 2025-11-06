const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
  try {
    //extract usr information from req.body
    const { username, email, password, role } = req.body;

    // Check if the user already exists in db
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistingUser)
      return res.status(400).json({
        success: false,
        message:
          "User is already exists either with same username or password. Please try with different username or email",
      });

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user and save in db
    const newCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newCreatedUser.save();

    if (newCreatedUser) {
      return res.status(201).json({
        success: true,
        message: "User registered successfully!",
      });
    } else {
      return res.status(401).json({
        success: true,
        message: "Unable to register user. Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!, Please try again",
    });
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    //find if the current user exists in the db or not
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists",
      });
    }

    //Validate password match
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // create user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      accessToken,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!, Please try again",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
