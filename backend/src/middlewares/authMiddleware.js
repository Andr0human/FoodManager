import JWT from 'jsonwebtoken';
import config from '../config.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  try {
    JWT.verify(token ?? '', config.jwtSecret ?? '');

    next();
  } catch (error) {
    console.error('error in authenticate middleware!', error);
    return res.send({
      status: false,
      message: 'user authentication failed!',
      error,
    });
  }
};

export default authMiddleware;
