import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Register User
export const register = async (req, res) => {
  try {
    //данные с фронтэнда
    const { username, password } = req.body;

    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.status(402).json({
        message: 'the username is already using',
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: 'registration successed',
      password,
      hash,
      username,
    });
  } catch (error) {
    res.json({
      message: 'failed to register',
    });
    console.log(error);
  }
};

//Login User
export const login = async (req, res) => {
  try {
    console.log(res);
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        message: 'there`s is no user with common "username"',
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: 'password incorrect',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '30d' },
    );

    return res.json({
      token,
      user,

      message: 'you logged successfully',
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'failed to login',
    });
  }
};

//Get me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        message: 'failed to get me',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      },
    );

    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      message: 'failed to access',
    });
  }
};
