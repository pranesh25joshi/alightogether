import mongoose from 'mongoose';

const connectDB = async (MONGO_URI) => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    
    await mongoose.connect(MONGO_URI);
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Falling back to local MongoDB...');
  }
};

export default connectDB;