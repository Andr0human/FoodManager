import mongoose from 'mongoose';

const connectDb = async (mongoUrl) => {
  try {
    await mongoose.connect(mongoUrl);
    console.info(`Connected to MongoDB database ${mongoUrl}`);
  } catch (error) {
    console.error('MongoDB database connection error', error);
  }
};

export default connectDb;
