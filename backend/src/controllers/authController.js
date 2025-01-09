import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import config from '../config.js';
import { userModel } from '../models/index.js';

const getByEmailController = async (req, res) => {
  try {
    const { emailId } = req.params;
    const user = await userModel.findOne({ email: emailId });

    if (!user) {
      return res.status(404).send({
        status: true,
        message: 'User not found!',
        data: req.params,
      });
    }

    return res.status(200).send({
      status: true,
      message: 'User found!',
      data: user,
    });
  } catch (error) {
    console.error('error in getByEmail api', error);
    return res.status(500).send({
      status: true,
      message: 'error retrieving user by email!',
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = req.body;

    // Check for existing user
    const existingUser = await userModel.findOne({ email: newUser.email });

    if (existingUser) {
      return res.status(409).send({
        status: true,
        message: 'User already exists!',
        data: newUser,
      });
    }

    // Hash password before saving in database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);

    await userModel.create({
      ...newUser,
      password: hashedPassword,
    });

    return res.status(201).send({
      status: true,
      message: 'new user added!',
      data: newUser,
    });
  } catch (error) {
    console.error('error in register api', error);
    return res.status(500).send({
      status: false,
      message: 'error creating new user!',
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const user = req.body;

    // User exist check
    const existingUser = await userModel.findOne({ email: user.email });

    if (!existingUser) {
      return res.status(404).send({
        status: true,
        message: 'no user found for current email!',
        data: user,
      });
    }

    // Correct password check
    const comparePassword = await bcrypt.compare(user.password, existingUser.password);

    if (!comparePassword) {
      return res.status(401).send({
        status: true,
        message: 'Invalid credentials!',
        data: user,
      });
    }

    const token = JWT.sign({ userId: existingUser?._id }, config.jwtSecret, { expiresIn: '1d' });

    return res.status(200).send({
      status: true,
      message: 'user login successfully!',
      data: { token, existingUser },
    });
  } catch (error) {
    console.error('error in login api', error);
    return res.status(500).send({
      status: true,
      message: 'error logging existing user!',
      error,
    });
  }
};

export { getByEmailController, loginController, registerController };
