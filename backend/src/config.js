import dotenv from 'dotenv';

dotenv.config();

const config = {
  devMode: process.env.DEV_MODE,
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};

export default config;
